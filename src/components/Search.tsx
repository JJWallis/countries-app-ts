import React, { useState } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import StyledInput from './styled/StyledInput'
import Icon from './styled/Icon'

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const { handleFurtherDetails, furtherDetailsError } =
      useFurtherDetailsContext()
   const { fetchError } = useCountriesContext()

   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchCountry()
   }

   const handleSearchCountry = () => {
      if (search && !fetchError?.current) {
         handleFurtherDetails(search)
         setSearch('')
      }
   }

   return (
      <>
         <StyledInput
            search
            disabled={fetchError?.current}
            error={furtherDetailsError}
            placeholder={
               furtherDetailsError
                  ? 'Please enter a valid country'
                  : 'Search for a country'
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
         />
         <Icon
            search
            viewBox="0 0 512 512"
            aria-label="Search for desired country"
            onClick={handleSearchCountry}
         >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
         </Icon>
      </>
   )
}

export default Search
