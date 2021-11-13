import React, { useContext, useRef } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const SearchFilter: React.FC = () => {
   const { homepage, setHomepage: sh } = { ...useContext(Context) }
   const prevFilter = useRef('')

   const updatePrevFilter = (filter: string) => (prevFilter.current = filter)

   const handleLayoutChange = () => {
      return homepage ? (
         <>
            <Search />
            <Filter
               prevFilter={prevFilter.current}
               updatePrevFilter={updatePrevFilter}
            />
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
