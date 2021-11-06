import React, { useContext, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const context = useContext(Context)

   const handleSearchCountry = () => {
      if (search !== '') context?.handleFurtherDetails(search)
   }

   return (
      <>
         <StyledInput
            search
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <StyledImg search src={SearchIcon} onClick={handleSearchCountry} />
      </>
   )
}

export default Search
