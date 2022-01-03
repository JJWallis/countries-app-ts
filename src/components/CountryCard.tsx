import React from 'react'
import Wrapper from './styled/Wrapper'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'

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
   const { handleFurtherDetails } = useFurtherDetailsContext()
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
         <Wrapper margin="0 0 0.2rem" key={key}>
            <CountrySubTitle>
               {key[0].toUpperCase() + key.slice(1, key.length) + ':'}
            </CountrySubTitle>
            <CountryData>{value ? value : 'No data provided'}</CountryData>
         </Wrapper>
      ))
   }

   return (
      <Wrapper
         as="section"
         role="grid-cell"
         country
         padding="0 0 1rem"
         onClick={() => handleFurtherDetails(name.toLowerCase())}
      >
         <Wrapper countryImgFlag={flag} />
         <Wrapper padding="1.5rem 1.7rem 2rem">
            <CountryName>{name ? name : 'No data provided'}</CountryName>
            {printData({ population, region, capital })}
         </Wrapper>
      </Wrapper>
   )
}

export default CountryCard
