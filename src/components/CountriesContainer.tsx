import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'

const CountriesContainer: React.FC = () => {
   const context = useContext(Context)

   return (
      // useLayoutEffect() - synchornously change layout of App when App Homepage state changes

      <Wrapper display={context?.homepage ? 'grid' : 'flexWrap'}>
         {context && context.countries ? (
            context.countries.map((country: any) => (
               <CountryCard key={uuidv4()} data={country} />
            ))
         ) : (
            <Loading>Loading...</Loading>
         )}
         {/* either display above if homepage state true
         or 2 flex items using countryDetails state from app - check if that's truthy too
         (1 with flag + other with data via prop passed as to it) */}
      </Wrapper>
   )
}

export default CountriesContainer
