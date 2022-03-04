import React, { FC } from 'react'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import { FallbackProps } from 'react-error-boundary'
import BackButton from './BackButton'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
   return (
      <>
         <SearchFilterContainer>
            <BackButton resetErrorBoundary={resetErrorBoundary} />
         </SearchFilterContainer>
         <ErrorMsg>
            {error?.message || 'Something went wrong'}
            <br /> Please return to homepage
         </ErrorMsg>
      </>
   )
}

export default ErrorFallback
