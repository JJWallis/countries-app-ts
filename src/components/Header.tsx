import React from 'react'
import { MainTitle } from './styled/StyledTitle'
import StyledHeader from './styled/StyledHeader'
import Wrapper from './styled/Wrapper'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => {
   return (
      <StyledHeader>
         <Wrapper
            align
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem 0"
            position="relative"
         >
            <MainTitle>Where in the world?</MainTitle>
            <ThemeSwitcher />
         </Wrapper>
      </StyledHeader>
   )
}

export default Header
