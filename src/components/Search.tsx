import React, { useState, useContext } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'

interface Props {}

const Search: React.FC<Props> = () => {
   const [search, setSearch] = useState('')
   const context = useContext<any>(Context)

   function searchCountry(input: string) {
      const desiredCountry: string = context.filter(
         (country: { name: { common: {}[] } }) =>
            country.name.common.includes(input)
      )
   }

   return (
      <StyledInput
         placeholder="Search for a country..."
         value={search}
         onChange={(e) => {
            setSearch(e.target.value)
            searchCountry(search)
            // refactor sep func
         }}
      />
   )
}

export default Search
