import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './containers/HeaderContainer.styled'
import { MainTitle } from './styled/StyledTitle'
import StyledHeader from './styled/StyledHeader'
import ThemeSwitcher from './ThemeSwitcher'

const Header: React.FC = () => {
   return (
      <StyledHeader>
         <HeaderContainer>
            <MainTitle>Where in the world?</MainTitle>
            {/* <Link to="/details">Details</Link> */}
            <ThemeSwitcher />
         </HeaderContainer>
      </StyledHeader>
   )
}

export default Header
