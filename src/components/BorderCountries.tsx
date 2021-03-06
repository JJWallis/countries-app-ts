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
import { convertToUrl } from '../helpers/ConvertToUrl'
import type { Country } from '../types/countriesContext.interface'

interface Props {
   country: Country
}

const BorderCountries: FC<Props> = ({ country }) => {
   const { countries } = useCountriesContext()

   const produceButtons = () => {
      const { borders } = country
      if (borders?.length) {
         return (
            <BorderButtonsContainer>
               {borders.map((border) => {
                  const name = countries?.find(
                     ({ cioc, cca3 }) => cioc === border || cca3 === border
                  )?.name.common

                  return (
                     <Link
                        key={uuid()}
                        to={`/details/${convertToUrl(name || '')}`}
                     >
                        <Button data-testid="border-btn" country>
                           {name}
                        </Button>
                     </Link>
                  )
               })}
            </BorderButtonsContainer>
         )
      }
      return (
         <Button disabled error>
            No bordering countries
         </Button>
      )
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
