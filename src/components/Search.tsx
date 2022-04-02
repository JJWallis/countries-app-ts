import React, { useState, FC, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountriesContext } from '../hooks/useCountriesContext'
import StyledInput from './styled/StyledInput'
import { convertToUrl } from '../helpers/ConvertToUrl'
import Icon from './styled/Icon'
import { applyFocus } from '../helpers/ApplyFocus'
import { lowerCased } from '../helpers/LowerCased'
import { v4 as uuid } from 'uuid'
import Button from './styled/StyledButton'
import DropDownCt from './DropDownCt'
import { DropDownResult } from './styled/StyledLink'

type LinksMap = Map<number, HTMLAnchorElement>

const Search: FC = () => {
   const [search, setSearch] = useState({
      searchInput: '',
      searchError: false,
   })
   const { countries, countriesError } = useCountriesContext()
   const navigate = useNavigate()
   const inputRef = useRef<HTMLInputElement>(null)
   const linksRef = useRef<LinksMap | null>(null)

   const getLinksMap = () => {
      if (!linksRef.current) linksRef.current = new Map()
      return linksRef.current
   }

   const handleSearchCountry = () => {
      if (
         search.searchInput &&
         countries?.find(
            ({ name: { common } }) =>
               lowerCased(common) === lowerCased(search.searchInput)
         )
      ) {
         navigate(`/details/${convertToUrl(search.searchInput)}`)
         return
      }
      setSearch({ searchInput: '', searchError: true })
      applyFocus(inputRef)
   }

   const handleKeyPress = (
      { key }: React.KeyboardEvent<HTMLInputElement>,
      id?: number
   ) => {
      if (key === 'Enter') handleSearchCountry()
      if (key === 'ArrowDown' || key === 'ArrowUp') {
         const map = getLinksMap()
         const target = map.get(id || 0)
         target?.focus()
      }
   }

   const renderMatches = (userInput: string) => {
      const results: string[] = []
      countries?.forEach(
         ({ name: { common } }) =>
            lowerCased(common).startsWith(lowerCased(userInput)) &&
            results.push(common)
      ) //   duplicate code
      return results.slice(0, 10).sort() || []
   }

   useEffect(() => applyFocus(inputRef), [])

   return (
      <>
         <StyledInput
            search
            disabled={countriesError}
            error={search.searchError}
            placeholder={
               search.searchError
                  ? 'Please enter a valid country'
                  : 'Search for a country'
            }
            value={search.searchInput}
            onChange={(e) =>
               setSearch({ ...search, searchInput: e.target.value })
            }
            onKeyDown={handleKeyPress}
            ref={inputRef}
         />
         <Button
            search
            disabled={countriesError || !search.searchInput}
            onClick={handleSearchCountry}
            aria-label="Search for inputted country"
            data-testid="search-icon"
         >
            <Icon search viewBox="0 0 512 512">
               <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </Icon>
         </Button>
         {search.searchInput && (
            <DropDownCt
               styleProp="search"
               testId="drop-down-search"
               toggled={search.searchInput ? true : false}
            >
               <ol>
                  {renderMatches(search.searchInput).map((country, idx) => (
                     <li key={uuid()}>
                        <DropDownResult
                           to={`/details/${convertToUrl(country)}`}
                           ref={(el) => {
                              const map = getLinksMap()
                              if (el) map.set(idx, el)
                              else map.delete(idx)
                           }}
                        >
                           {country}
                        </DropDownResult>
                     </li>
                  ))}
               </ol>
            </DropDownCt>
         )}
      </>
   )
}

export default Search
