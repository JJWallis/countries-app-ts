import React, { FC } from 'react'
import { HeaderContainer } from './containers/HeaderContainer.styled'
import { MainTitle } from './styled/StyledTitle'
import StyledHeader from './styled/StyledHeader'

const Header: FC = ({ children }) => {
   return (
      <StyledHeader>
         <HeaderContainer>
            <MainTitle data-testid="header-title">
               Where in the world?
            </MainTitle>
            {children}
         </HeaderContainer>
      </StyledHeader>
   )
}

export default Header
