import React, { FC } from 'react'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import BackButton from './BackButton'

const ErrorFallback: FC = () => {
   return (
      <>
         <SearchFilterContainer>
            <BackButton />
         </SearchFilterContainer>
         <ErrorMsg>
            404
            <br /> Please return to homepage
         </ErrorMsg>
      </>
   )
}

export default ErrorFallback
