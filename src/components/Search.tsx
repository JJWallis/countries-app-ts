import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const {
      handleFurtherDetails: hfr,
      error,
      fetchError,
   } = { ...useContext(Context) }
   const hasInputChanged = useRef(false)

   useEffect(() => {
      if (search) {
         hasInputChanged.current = true
      } else if (search === '' && hasInputChanged.current) {
         hasInputChanged.current = false
      }
   }, [search])

   //  if not - sep local searchError state toggled from error state in App
   //  toggles to true based on hasErrorOccured logic

   const hasErrorOccured = () =>
      hasInputChanged.current && error ? true : false

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
            disabled={fetchError && error}
            error={hasErrorOccured()}
            placeholder={
               hasErrorOccured()
                  ? 'Please enter a valid country'
                  : 'Search for a country'
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
