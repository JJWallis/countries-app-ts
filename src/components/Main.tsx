import React from 'react'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'

const Main: React.FC = () => {
   return (
      <StyledMain>
         <Wrapper>
            <SearchFilter />
            <Countries />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
