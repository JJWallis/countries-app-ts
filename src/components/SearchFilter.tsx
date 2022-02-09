import React, { useRef, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import Search from '../components/Search'
import BackButton from './BackButton'
import Filter from '../components/Filter'

const SearchFilter: FC = () => {
   const prevFilter = useRef('')
   const updatePrevFilter = (filter: string) => (prevFilter.current = filter)

   return (
      <SearchFilterContainer>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Search />
                     <Filter
                        prevFilter={prevFilter.current}
                        updatePrevFilter={updatePrevFilter}
                     />
                  </>
               }
            />
            <Route path="/details/:country" element={<BackButton />} />
         </Routes>
      </SearchFilterContainer>
   )
}

export default SearchFilter
