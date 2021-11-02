import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Wrapper from './styled/Wrapper'
import Country from './CountryCard'
import { Loading } from './styled/StyledTitle'

const CountriesContainer: React.FC = () => {
   const context = useContext(Context)
   return (
      // pass data to Country as obj of info vs lots of properties
      // then info within obj can be dynamic
      // obj spread operator vs below - build obj with info below + pass to here

      <Wrapper grid role="grid">
         {context ? (
            context.map((country: any) => (
               <Country
                  key={uuidv4()}
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
               />
            ))
         ) : (
            <Loading>Loading...</Loading>
         )}
      </Wrapper>
   )
}

export default CountriesContainer
