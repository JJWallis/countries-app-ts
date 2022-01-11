import React from 'react'
import { CountryCardProps } from '../types/CountryCard.interface'
import { Link } from 'react-router-dom'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import {
   CountryCard as Card,
   CountryImageContainer,
} from './containers/CountryContainer.styled'
import Wrapper from './containers/Wrapper'

const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
   const {
      flags: { svg: flag },
      name: { common: name },
      population,
      region,
      capital,
   } = data

   const printData = (newData: Partial<CountryCardProps['data']>) => {
      return Object.entries(newData).map(([key, value]) => (
         <Wrapper margin="0 0 0.2rem" key={key}>
            <CountrySubTitle as="p">
               {key[0].toUpperCase() + key.slice(1, key.length) + ':'}
            </CountrySubTitle>
            <CountryData>{value ? value : 'No data provided'}</CountryData>
         </Wrapper>
      ))
   }

   return (
      <Card>
         <Link to={`/details/${name.split(' ').join('-').toLowerCase()}`}>
            <CountryImageContainer
               countryImgFlag={flag}
               aria-label={`Flag of ${name}`}
            />
            <Wrapper padding="1.5rem 1.7rem 2rem">
               <CountryName>{name ? name : 'No data provided'}</CountryName>
               {printData({ population, region, capital })}
            </Wrapper>
         </Link>
      </Card>
   )
}

export default CountryCard
