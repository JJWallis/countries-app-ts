import React from 'react'
import StyledHeader from './styled/StyledHeader'
import Wrapper from './styled/Wrapper'
import { MainTitle } from './styled/StyledTitle'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => {
   return (
      <StyledHeader>
         <Wrapper align sb padding="1rem 0">
            <MainTitle>Where in the world?</MainTitle>
            <ThemeSwitcher />
         </Wrapper>
      </StyledHeader>
   )
}

export default Header
