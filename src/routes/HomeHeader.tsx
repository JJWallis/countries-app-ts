import React, { useRef } from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

const SearchFilter: React.FC = () => {
   const prevFilter = useRef('')
   const updatePrevFilter = (filter: string) => (prevFilter.current = filter)

   return (
      <>
         <Search />
         <Filter
            prevFilter={prevFilter.current}
            updatePrevFilter={updatePrevFilter}
         />
      </>
   )
}

export default SearchFilter
