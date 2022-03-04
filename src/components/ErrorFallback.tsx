import React, { FC } from 'react'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import BackButton from './BackButton'

interface Props {
   error?: any
}

const ErrorFallback: FC<Props> = ({ error }) => {
   return (
      <>
         <SearchFilterContainer>
            <BackButton />
         </SearchFilterContainer>
         <ErrorMsg>
            {error.message || 'Something went wrong'}
            <br /> Please return to homepage
         </ErrorMsg>
      </>
   )
}

export default ErrorFallback
