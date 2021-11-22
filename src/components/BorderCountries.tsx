import React, { useContext } from 'react'
import Wrapper from './styled/Wrapper'
import Button from './styled/StyledButton'
import { v4 as uuid } from 'uuid'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { Context } from '../App'

const BorderCountries: React.FC = () => {
   const { furtherDetails, handleFurtherDetails: hfr } = {
      ...useContext(Context),
   }

   const produceButtons = () => {
      if (furtherDetails) {
         const { borders } = furtherDetails[0]
         if (borders && borders.length > 0) {
            return (
               <Wrapper>
                  {borders.map((border: string) => (
                     <Button
                        country
                        key={uuid()}
                        onClick={() => hfr && hfr(border.toUpperCase())}
                     >
                        {border}
                     </Button>
                  ))}
               </Wrapper>
            )
         }
         return <Button error>No bordering countries</Button>
      }
   }

   return (
      <Wrapper bordersParent>
         <CountrySubTitle borderTitle>Border Countries:</CountrySubTitle>
         {produceButtons()}
      </Wrapper>
   )
}

export default BorderCountries
