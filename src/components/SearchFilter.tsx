import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import HomeHeader from '../routes/HomeHeader'
import FurtherHeader from '../routes/FurtherHeader'

const SearchFilter: React.FC = () => {
   return (
      <SearchFilterContainer>
         <Routes>
            <Route path="/" element={<HomeHeader />} />
            <Route path="/details/:country" element={<FurtherHeader />} />
         </Routes>
      </SearchFilterContainer>
   )
}

export default SearchFilter
