import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import CountryCard from './CountryCard'
import { Loading } from './styled/StyledTitle'

const CountriesContainer: React.FC = () => {
   const context = useContext(Context)

   return (
      // info within data obj can be dynamic?
      // useLayoutEffect() - synchornously change layout of App when App Homepage state changes
      // useEffect() - runs asynchornously so changes occur after React renders to DOM
      // could show wrong layout 1st + then correct (would be quick but still...)

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
