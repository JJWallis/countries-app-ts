import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'

const CountriesContainer: React.FC = () => {
   const context = useContext(Context)

   // useLayoutEffect() - synchornously change layout of App when App Homepage state changes
   // extrapolate countryDetails state into another data obj - passed to CountryCardDetails component
   // extrapolate below logic into sep func which runs if homepage state (or FurtherDetails) is true
   // or 2 flex items (FurtherDetails) if false using countryDetails state from app - check if that's truthy here too?
   // (1 fragment + wrapper with flag within + other wrapper with data via prop passed as to it)

   return (
      <Wrapper display={context?.homepage ? 'grid' : 'flexWrap'}>
         {context && context.countries ? (
            context.countries.map((country: any) => (
               <CountryCard key={uuidv4()} data={country} />
            ))
         ) : (
            <Loading>Loading...</Loading>
         )}
      </Wrapper>
   )
}

export default CountriesContainer
