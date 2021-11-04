import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'

const SearchFilter: React.FC = () => {
   const context = useContext(Context)

   // useLayoutEffect() - synchornously change layout of App when App Homepage state changes

   return (
      <Wrapper sb sf>
         {context && context.homepage ? (
            <>
               <Search />
               <Filter />
            </>
         ) : (
            <Button back onClick={() => context?.setHomepage(true)}>
               Back
            </Button>
         )}
      </Wrapper>
   )
}

export default SearchFilter
