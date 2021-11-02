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
