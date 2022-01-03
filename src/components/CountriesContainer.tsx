import React from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { v4 as uuidv4 } from 'uuid'
import { Loading } from './styled/StyledTitle'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import FurtherDetails from './FurtherDetails'

const CountriesContainer: React.FC = () => {
   const { filteredRegions } = useGlobalContext()
   const { countries, countriesError } = useCountriesContext()
   const { furtherDetails } = useFurtherDetailsContext()

   const determineData = () => (!filteredRegions ? countries : filteredRegions)

   const handleContentVisible = () => {
      if (!furtherDetails) {
         const data = determineData()
         return data ? (
            <Wrapper as="article" display={'grid'} role="grid">
               {data.map((country) => (
                  <CountryCard key={uuidv4()} data={country} />
               ))}
            </Wrapper>
         ) : (
            <Loading>
               {countriesError
                  ? 'Country data could not be retrieved. Please reload & try again.'
                  : 'Loading...'}
            </Loading>
         )
      }

      return (
         <Wrapper display={'flexWrap'}>
            <FurtherDetails />
         </Wrapper>
      )
   }

   return <>{handleContentVisible()}</>
}

export default CountriesContainer
