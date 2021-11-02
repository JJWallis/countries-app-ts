import React, { useState } from 'react'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const Main: React.FC = () => {
   const [homepage, setHomepage] = useState(true)

   return (
      <StyledMain>
         <Wrapper>
            <SearchFilter>
               {homepage ? (
                  <React.Fragment>
                     <Search />
                     <Filter />
                  </React.Fragment>
               ) : (
                  <Button back>Back</Button>
               )}
            </SearchFilter>
            <Countries />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
