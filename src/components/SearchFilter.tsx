import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const SearchFilter: React.FC = () => {
   const { homepage, setHomepage: sh } = { ...useContext(Context) }

   const handleLayoutChange = () => {
      return homepage ? (
         <>
            <Search />
            <Filter />
         </>
      ) : (
         <Button back onClick={() => sh && sh(true)}>
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
