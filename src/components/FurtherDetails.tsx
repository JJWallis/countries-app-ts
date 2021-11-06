import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'

const FurtherDetails: React.FC = () => {
   const context = useContext(Context)

   // or 2 flex items (FurtherDetails) if false using countryDetails state from app - check if that's truthy here too?
   // (1 fragment + wrapper with flag within + other wrapper with data)

   return (
      <>
         <Wrapper flexChild></Wrapper>
         <Wrapper flexChild></Wrapper>
      </>
   )
}

export default FurtherDetails
