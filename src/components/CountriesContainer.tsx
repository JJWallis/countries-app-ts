import React, { useContext } from 'react'
import { Context } from '../App'
// import { v4 as uuidv4 } from 'uuid'
// import styled from 'styled-components'
// import Country from './Country'

interface Props {}

const CountriesContainer: React.FC<Props> = () => {
   const context = useContext(Context)
   return (
    //    obj spread operator vs below - build obj with info below + pass to here
    
    //   <StyledCountries role="grid">
    //      {context ? (
    //         context.map((country) => (
    //            <Country
    //               key={uuidv4()}
    //               flag={country.flags.svg}
    //               name={country.name.common}
    //               population={country.population}
    //               region={country.region}
    //               capital={country.capital}
    //            />
    //         ))
    //      ) : (
    //         <Loading>Loading...</Loading>
    //      )}
    //   </StyledCountries>
   )
}

export default CountriesContainer
