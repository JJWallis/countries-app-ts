import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from './styled/StyledButton'
import Icon from './styled/Icon'

interface Props {
   resetErrorBoundary?: (...args: unknown[]) => void
}

const BackButton: FC<Props> = ({ resetErrorBoundary }) => {
   return (
      <Link to="/" onClick={resetErrorBoundary && resetErrorBoundary}>
         <Button back>Back</Button>
         <Icon
            arrow
            data-testid="arrow-icon"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 448 512"
         >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
         </Icon>
      </Link>
   )
}

export default BackButton
