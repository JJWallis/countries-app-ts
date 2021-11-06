import React, { useState } from 'react'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   // show error msg if country isn't found or validation fails
   // const [error, setError] = useState(false)

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
