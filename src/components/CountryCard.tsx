import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import {
   CountryCard as Card,
   CountryImageContainer,
} from './containers/CountryContainer.styled'
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

   const printData = (newData: Partial<Props['data']>) => {
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
      <Card
         as="section"
         onClick={() => handleFurtherDetails(name.toLowerCase())}
      >
         <CountryImageContainer
            countryImgFlag={flag}
            aria-label={`Flag of ${name}`}
         />
         <Wrapper padding="1.5rem 1.7rem 2rem">
            <CountryName>{name ? name : 'No data provided'}</CountryName>
            {printData({ population, region, capital })}
         </Wrapper>
      </Card>
   )
}

export default CountryCard
