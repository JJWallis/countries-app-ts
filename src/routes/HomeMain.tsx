import React from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFilteredRegionsContext } from '../hooks/useFilteredRegionsContext'
import { CountryContainer as Countries } from '../components/containers/CountryContainer.styled'
import { Loading } from '../components/styled/StyledTitle'
import CountryCard from '../components/CountryCard'

const HomeMain: React.FC = () => {
   const { countries, countriesError } = useCountriesContext()
   const { filteredRegions } = useFilteredRegionsContext()
   const data = !filteredRegions ? countries : filteredRegions

   return data ? (
      <Countries>
         {data.map((country, idx) => (
            <CountryCard key={idx} data={country} />
         ))}
      </Countries>
   ) : (
      <Loading>
         {countriesError
            ? 'Country data could not be retrieved. Please reload & try again.'
            : 'Loading...'}
      </Loading>
   )
}

export default HomeMain
