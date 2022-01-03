import React from 'react'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'

const Main: React.FC = () => {
   return (
      <StyledMain>
         <Wrapper main align padding="1rem 0 0">
            <SearchFilter />
            <Countries />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
