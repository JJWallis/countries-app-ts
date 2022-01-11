import React, { useRef, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import HomeHeader from '../routes/HomeHeader'
import BackButton from './BackButton'

const SearchFilter: FC = () => {
   const prevFilter = useRef('')
   const updatePrevFilter = (filter: string) => (prevFilter.current = filter)

   return (
      <SearchFilterContainer>
         <Routes>
            <Route
               path="/"
               element={
                  <HomeHeader
                     prevFilter={prevFilter}
                     updatePrevFilter={updatePrevFilter}
                  />
               }
            />
            <Route path="/details/:country" element={<BackButton />} />
         </Routes>
      </SearchFilterContainer>
   )
}

export default SearchFilter
