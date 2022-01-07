import React from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { v4 as uuid } from 'uuid'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { BordersContainer } from './containers/BordersContainer.styled'
import Wrapper from './styled/Wrapper'
import Button from './styled/StyledButton'

const BorderCountries: React.FC = () => {
   const { furtherDetails, handleFurtherDetails } = useFurtherDetailsContext()
   const { countries } = useCountriesContext()

   const produceButtons = () => {
      if (furtherDetails) {
         const { borders } = furtherDetails[0]
         if (borders?.length) {
            return (
               <Wrapper
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  gap="0.7rem"
               >
                  {borders.map((border) => (
                     <Button
                        country
                        key={uuid()}
                        onClick={() =>
                           handleFurtherDetails(border.toUpperCase())
                        }
                     >
                        {
                           countries?.find(
                              (country) =>
                                 country.cioc === border ||
                                 country.cca3 === border
                           )?.name.common
                        }
                     </Button>
                  ))}
               </Wrapper>
            )
         }
         return <Button error>No bordering countries</Button>
      }
   }

   return (
      <BordersContainer as="section">
         <CountrySubTitle borderTitle>Border Countries:</CountrySubTitle>
         {produceButtons()}
      </BordersContainer>
   )
}

export default BorderCountries
