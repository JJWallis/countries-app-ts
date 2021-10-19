import React from 'react'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

interface Props {
   key: string
   flag?: string
   name?: string
   population?: string
   region?: string
   capital?: string
}

const CountryCard: React.FC<Props> = (props) => {
   const { flag, name, population, region, capital } = props

   // build obj with all data below | flag + name as direct properties |
   // other data - put into an obj in parent arr (in key/val pair)
   // map() over that here to produce a StatTitle + StatData(CountryData) for each

   return (
      <Wrapper country role="gridcell">
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
