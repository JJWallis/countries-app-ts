import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'
import FurtherDetails from './FurtherDetails'

const CountriesContainer: React.FC = () => {
   const context = useContext(Context)

   // homepage state doesn't get updated - stays falsy
   // re-factor - func that returns grid of cards (data is passed in as param - checks if fitlered data is truthy)
   // + prioritises it if so (else default countries)
   // split up so not double short-circuiting (check if data is truthy before + arr of components which gets returned/rendered)
   // if specifc region is already visible - don't re-render (useEffect)

   const handleContentVisible = () => {
      if (context?.homepage) {
         if (!context.filteredRegions) {
            return (
               <Wrapper display={'grid'}>
                  {context && context.countries ? (
                     context.countries.map((country: any) => (
                        <CountryCard key={uuidv4()} data={country} />
                     ))
                  ) : (
                     <Loading>Loading...</Loading>
                  )}
               </Wrapper>
            )
         } else {
            return (
               <Wrapper display={'grid'}>
                  {context &&
                     context.filteredRegions &&
                     context.filteredRegions.map((country: any) => (
                        <CountryCard key={uuidv4()} data={country} />
                     ))}
               </Wrapper>
            )
         }
      } else {
         return (
            <Wrapper display={'flexWrap'}>
               <FurtherDetails />
            </Wrapper>
         )
      }
   }

   return <>{handleContentVisible()}</>
}

export default CountriesContainer
