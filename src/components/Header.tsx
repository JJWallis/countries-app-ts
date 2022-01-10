import React from 'react'
import { HeaderContainer } from './containers/HeaderContainer.styled'
import { MainTitle } from './styled/StyledTitle'
import StyledHeader from './styled/StyledHeader'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => {
   return (
      <StyledHeader>
         <HeaderContainer>
            <MainTitle>Where in the world?</MainTitle>
            <ThemeSwitcher />
         </HeaderContainer>
      </StyledHeader>
   )
}

export default Header
