import React from 'react'
import Wrapper from './styled/Wrapper'
import Button from './styled/StyledButton'
import { v4 as uuid } from 'uuid'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'

const BorderCountries: React.FC = () => {
   const { furtherDetails, handleFurtherDetails } = useFurtherDetailsContext()
   const { countries } = useCountriesContext()

   const produceButtons = () => {
      if (furtherDetails) {
         const { borders } = furtherDetails[0]
         if (borders && borders.length > 0) {
            return (
               <Wrapper
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  gap="0.7rem"
               >
                  {borders.map((border: string) => (
                     <Button
                        country
                        key={uuid()}
                        onClick={() =>
                           handleFurtherDetails(border.toUpperCase())
                        }
                     >
                        {
                           countries?.find(
                              (country: any) =>
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
      <Wrapper as="section" bordersParent>
         <CountrySubTitle borderTitle>Border Countries:</CountrySubTitle>
         {produceButtons()}
      </Wrapper>
   )
}

export default BorderCountries
