import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'
import FurtherDetails from './FurtherDetails'

const CountriesContainer: React.FC = () => {
   const {
      filteredRegions: fr,
      countries,
      homepage,
   } = { ...useContext(Context) }

   const determineData = () => (!fr ? countries : fr)

   const handleContentVisible = () => {
      if (homepage) {
         const data = determineData()
         return (
            <Wrapper display={'grid'}>
               {data ? (
                  data.map((country) => (
                     <CountryCard key={uuidv4()} data={country} />
                  ))
               ) : (
                  <Loading>Loading...</Loading>
               )}
            </Wrapper>
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
