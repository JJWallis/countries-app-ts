import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

export interface Props {
   key: string
   data: {
      flags: { svg: string }
      name: { common: string }
      population?: string
      region?: string
      capital?: string
   }
}

const CountryCard: React.FC<Props> = ({ data }) => {
   const { flags, name, population, region, capital } = data
   const context = useContext(Context)

   return (
      <Wrapper
         country
         onClick={() =>
            context?.handleFurtherDetails(name.common.toLowerCase())
         }
      >
         <CountryImg src={flags.svg} alt="Countries flag." />
         <CountryName>{name.common}</CountryName>
         <Wrapper countryData>
            <CountrySubTitle>Population:</CountrySubTitle>
            <CountryData>{population}</CountryData>
         </Wrapper>
         <Wrapper countryData>
            <CountrySubTitle>Region:</CountrySubTitle>
            <CountryData>{region}</CountryData>
         </Wrapper>
         <CountrySubTitle>Capital:</CountrySubTitle>
         <CountryData>{capital}</CountryData>
      </Wrapper>
   )
}

export default CountryCard
