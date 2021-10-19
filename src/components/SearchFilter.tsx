import React from 'react'
import Wrapper from './styled/Wrapper'
import Search from './Search'
import Filter from './Filter'

const SearchFilter: React.FC = () => {
   return (
      <Wrapper searchFilter>
         <Search />
         <Filter />
      </Wrapper>
   )
}

export default SearchFilter
