import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const { handleFurtherDetails: hfr, error } = { ...useContext(Context) }
   const hasInputChanged = useRef(false)

   // func to check ref status each time error state changes - if true then return true (else false)

   useEffect(() => {
      if (search) {
         hasInputChanged.current = true
      } else if (search === '' && hasInputChanged.current) {
         hasInputChanged.current = false
      }
   }, [search])

   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchCountry()
   }

   const handleSearchCountry = () => {
      if (search !== '') {
         hfr && hfr(search)
         setSearch('')
      }
   }

   return (
      <>
         <StyledInput
            search
            error={error}
            placeholder={
               error ? 'Please enter a valid country' : 'Search for a country'
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
         />
         <StyledImg search src={SearchIcon} onClick={handleSearchCountry} />
      </>
   )
}

export default Search
