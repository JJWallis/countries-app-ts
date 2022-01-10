import React from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { v4 as uuidv4 } from 'uuid'
import { CountryContainer as Countries } from '../components/containers/CountryContainer.styled'
import { Loading } from '../components/styled/StyledTitle'
import CountryCard from '../components/CountryCard'

const CountriesContainer: React.FC = () => {
   const { filteredRegions } = useGlobalContext()
   const { countries, countriesError } = useCountriesContext()
   const determineData = () => (!filteredRegions ? countries : filteredRegions)
   const data = determineData()

   return data ? (
      <Countries>
         {data.map((country) => (
            <CountryCard key={uuidv4()} data={country} />
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

export default CountriesContainer
