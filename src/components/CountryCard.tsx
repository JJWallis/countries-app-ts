import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

interface Props {
   data: {
      flags: { svg: string }
      name: { common: string }
      population?: number
      region?: string
      capital?: string
   }
}

const CountryCard: React.FC<Props> = ({ data }) => {
   const { handleFurtherDetails: hfr } = { ...useContext(Context) }
   const {
      flags: { svg: flag },
      name: { common: name },
      population,
      region,
      capital,
   } = data

   return (
      <Wrapper country onClick={() => hfr && hfr(name.toLowerCase())}>
         <CountryImg src={flag} alt="Countries flag." />
         <CountryName>{name}</CountryName>
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
