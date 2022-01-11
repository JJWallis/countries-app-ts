import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { v4 as uuid } from 'uuid'
import { CountrySubTitle } from './styled/CountryDataTitle'
import {
   BordersContainer,
   BorderButtonsContainer,
} from './containers/BordersContainer.styled'
import Button from './styled/StyledButton'
import { Country } from '../types/countriesContext.interface'

interface Props {
   country: Country | undefined
}

const BorderCountries: FC<Props> = ({ country }) => {
   const { countries } = useCountriesContext()

   const produceButtons = () => {
      if (country) {
         const { borders } = country
         if (borders?.length) {
            return (
               <BorderButtonsContainer>
                  {borders.map((border) => {
                     const name = countries?.find(
                        (country) =>
                           country.cioc === border || country.cca3 === border
                     )?.name.common

                     return (
                        <Link
                           key={uuid()}
                           to={`/details/${name
                              ?.split(' ')
                              .join('-')
                              .toLowerCase()}`}
                        >
                           <Button country>{name}</Button>
                        </Link>
                     )
                  })}
               </BorderButtonsContainer>
            )
         }
         return <Button error>No bordering countries</Button>
      }
   }

   return (
      <BordersContainer>
         <CountrySubTitle borderTitle>
            {country ? 'Border Countries:' : ''}
         </CountrySubTitle>
         {produceButtons()}
      </BordersContainer>
   )
}

export default BorderCountries
