import React, { useContext } from 'react'
import { Context } from '../components/Context'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'
import FurtherDetails from './FurtherDetails'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'

const CountriesContainer: React.FC = () => {
   const { filteredRegions } = {
      ...useContext(Context),
   }
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
