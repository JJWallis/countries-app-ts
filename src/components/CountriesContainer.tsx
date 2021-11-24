import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'
import FurtherDetails from './FurtherDetails'

const CountriesContainer: React.FC = () => {
   const { filteredRegions, countries, homepage, error } = {
      ...useContext(Context),
   }

   const determineData = () => (!filteredRegions ? countries : filteredRegions)

   const handleContentVisible = () => {
      if (homepage) {
         const data = determineData()
         return data ? (
            <Wrapper as="article" display={'grid'} role="grid">
               {data.map((country) => (
                  <CountryCard key={uuidv4()} data={country} />
               ))}
            </Wrapper>
         ) : (
            <Loading>
               {error
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
