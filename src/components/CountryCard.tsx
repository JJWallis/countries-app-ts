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
      population: number
      region: string
      capital: string
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

   const printData = (data: {
      population: string | Props['data']['population']
      region: Props['data']['region']
      capital: Props['data']['capital']
   }) => {
      return Object.entries(data).map(([key, value]) => (
         <Wrapper countryData key={key}>
            <CountrySubTitle>
               {key[0].toUpperCase() + key.slice(1, key.length)}
            </CountrySubTitle>
            <CountryData>{value ? value : 'No data provided'}</CountryData>
         </Wrapper>
      ))
   }

   return (
      <Wrapper country onClick={() => hfr && hfr(name.toLowerCase())}>
         <Wrapper countryImgFlag={flag} />
         <Wrapper countryDataParent>
            <CountryName>{name ? name : 'No data provided'}</CountryName>
            {printData({ population, region, capital })}
         </Wrapper>
      </Wrapper>
   )
}

export default CountryCard
