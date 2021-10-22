import React, { useState, useContext } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'

interface Search {
   handleSearch: React.ChangeEventHandler<HTMLInputElement>
}

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const context = useContext<any>(Context)

   function searchCountry(input: string) {
      const desiredCountry: string = context.filter(
         (country: any) =>
            country.name.common.toLowerCase() === input.toLowerCase()
      )
      console.log(desiredCountry)
   }

   const handleSearch: Search['handleSearch'] = (e) => {
      setSearch(e.target.value)
      searchCountry(search)
   }

   return (
      <StyledInput
         placeholder="Search for a country..."
         value={search}
         onChange={(e) => handleSearch(e)}
      />
   )
}

export default Search
