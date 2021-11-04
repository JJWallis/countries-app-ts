import React, { useState } from 'react'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')

   return (
      <>
         <StyledInput
            search
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <StyledImg search src={SearchIcon} />
      </>
   )
}

export default Search
