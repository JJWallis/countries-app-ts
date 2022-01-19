import React, { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountriesContext } from '../hooks/useCountriesContext'
import StyledInput from './styled/StyledInput'
import Icon from './styled/Icon'

const Search: FC = () => {
   const [search, setSearch] = useState('')
   const [error, setError] = useState(false)
   const { countries, countriesError } = useCountriesContext()
   const navigate = useNavigate()

   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchCountry()
   }

   const handleSearchCountry = () => {
      if (
         search &&
         countries?.find(
            ({ name }) => name?.common.toLowerCase() === search.toLowerCase()
         )
      ) {
         navigate(`/details/${search.split(' ').join('-').toLowerCase()}`)
         return
      }
      setError(true)
      setSearch('')
   }

   return (
      <>
         <StyledInput
            search
            disabled={countriesError}
            error={error}
            placeholder={
               error ? 'Please enter a valid country' : 'Search for a country'
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            data-testid="search-input"
         />
         <Icon
            search
            viewBox="0 0 512 512"
            aria-label="Interactive icon to search for inputted country"
            onClick={handleSearchCountry}
            disabled={countriesError || !search}
         >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
         </Icon>
      </>
   )
}

export default Search
