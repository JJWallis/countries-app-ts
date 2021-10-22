import React, { useState, useContext } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import StyledImg from './styled/StyledImg'
import SearchIcon from '../assets/search.svg'

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

   return (
      <React.Fragment>
         <StyledInput
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <StyledImg
            search
            src={SearchIcon}
            onClick={() => search && searchCountry(search)}
         />
      </React.Fragment>
   )
}

export default Search
