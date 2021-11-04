import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuid } from 'uuid'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const SearchFilter: React.FC = () => {
   const context = useContext(Context)

   const handleLayoutChange = () => {
      let layout = context?.homepage ? (
         [<Search key={uuid()} />, <Filter key={uuid()} />]
      ) : (
         <Button back onClick={() => context?.setHomepage(true)}>
            Back
         </Button>
      )
      return layout
   }

   return (
      <Wrapper sb sf>
         {handleLayoutChange()}
      </Wrapper>
   )
}

export default SearchFilter
