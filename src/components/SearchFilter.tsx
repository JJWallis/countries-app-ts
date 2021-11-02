import React from 'react'
import Wrapper from './styled/Wrapper'

const SearchFilter: React.FC = (props) => {
   return (
      <Wrapper sb sf>
         {props.children}
      </Wrapper>
   )
}

export default SearchFilter
