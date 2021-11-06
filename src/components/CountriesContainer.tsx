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

   return (
      <Wrapper display={context?.homepage ? 'grid' : 'flexWrap'}>
         {context && context.countries ? (
            context.countries.map((country: any) => (
               <CountryCard key={uuidv4()} data={country} />
            ))
         ) : (
            <Loading>Loading...</Loading>
         )}
         {/* 
            either display above if homepage state true
            or 2 flex items if false using countryDetails state from app - check if that's truthy too
            (1 component housing wrapper with flag within + other with data via prop passed as to it -
            new CountryDetailsCard component) 
         */}
      </Wrapper>
   )
}

export default CountriesContainer
