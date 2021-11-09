import React, { useContext } from 'react'
import Wrapper from './styled/Wrapper'
import Button from './styled/StyledButton'
import { v4 as uuid } from 'uuid'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { Context } from '../App'

const BorderCountries: React.FC = () => {
   const { furtherDetails: fd, handleFurtherDetails: hfr } = {
      ...useContext(Context),
   }

   const produceButtons = () => {
      if (fd) {
         const data: any = fd[0]
         if (data.borders && data.borders.length > 0) {
            return data.borders.map((border: string) => {
               return (
                  <Button
                     key={uuid()}
                     country
                     onClick={() => hfr && hfr(border.toUpperCase())}
                  >
                     {border}
                  </Button>
               )
            })
         }
         return <Button error>No bordering countries</Button>
      }
   }

   return (
      <Wrapper border>
         <CountrySubTitle>Border Countries:</CountrySubTitle>
         {produceButtons()}
      </Wrapper>
   )
}

export default BorderCountries
