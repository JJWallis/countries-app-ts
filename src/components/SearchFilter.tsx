import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const SearchFilter: React.FC = () => {
   const context = useContext(Context)

   const handleLayoutChange = () => {
      return context?.homepage ? (
         <>
            <Search />
            <Filter />
         </>
      ) : (
         <Button back onClick={() => context?.setHomepage(true)}>
            Back
         </Button>
      )
   }

   return (
      <Wrapper sb sf>
         {handleLayoutChange()}
      </Wrapper>
   )
}

export default SearchFilter
