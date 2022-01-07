import React from 'react'
import StyledMain from './styled/StyledMain'
import { MainContainer } from './containers/MainContainer.styled'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'

const Main: React.FC = () => {
   return (
      <StyledMain>
         <MainContainer>
            <SearchFilter />
            <Countries />
         </MainContainer>
      </StyledMain>
   )
}

export default Main
