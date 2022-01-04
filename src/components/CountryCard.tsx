import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import Wrapper from './styled/Wrapper'

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
      population: number
      region: string
      capital: string
   }) => {
      return Object.entries(data).map(([key, value]) => (
         <Wrapper margin="0 0 0.2rem" key={key}>
            <CountrySubTitle as="p">
               {key[0].toUpperCase() + key.slice(1, key.length) + ':'}
            </CountrySubTitle>
            <CountryData>{value ? value : 'No data provided'}</CountryData>
         </Wrapper>
      ))
   }

   return (
      <Wrapper
         as="section"
         country
         padding="0 0 1rem"
         onClick={() => handleFurtherDetails(name.toLowerCase())}
      >
         <Wrapper countryImgFlag={flag} aria-label={`Flag of ${name}`} />
         <Wrapper padding="1.5rem 1.7rem 2rem">
            <CountryName>{name ? name : 'No data provided'}</CountryName>
            {printData({ population, region, capital })}
         </Wrapper>
      </Wrapper>
   )
}

export default CountryCard
