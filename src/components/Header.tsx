import React, { FC } from 'react'
import { HeaderContainer } from './containers/HeaderContainer.styled'
import { MainTitle } from './styled/StyledTitle'
import StyledHeader from './styled/StyledHeader'
import ThemeSwitcher from './ThemeSwitcher'

interface Props {
   handleThemeChange: (dark: boolean) => void
}

const Header: FC<Props> = ({ handleThemeChange }) => {
   return (
      <StyledHeader>
         <HeaderContainer>
            <MainTitle data-testid="header-title">
               Where in the world?
            </MainTitle>
            <ThemeSwitcher handleThemeChange={handleThemeChange} />
         </HeaderContainer>
      </StyledHeader>
   )
}

export default Header
