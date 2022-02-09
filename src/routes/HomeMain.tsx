import React from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFilteredRegionsContext } from '../hooks/useFilteredRegionsContext'
import { CountryContainer as Countries } from '../components/containers/CountryContainer.styled'
import { Loading } from '../components/styled/StyledTitle'
import { v4 as uuid } from 'uuid'
import CountryCard from '../components/CountryCard'

const HomeMain: React.FC = () => {
   const { countries, countriesError } = useCountriesContext()
   const filteredRegions = useFilteredRegionsContext()
   const dataToRender = !filteredRegions ? countries : filteredRegions

   return dataToRender ? (
      <Countries id="country-information">
         {dataToRender.map((country) => (
            <CountryCard key={uuid()} data={country} />
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
