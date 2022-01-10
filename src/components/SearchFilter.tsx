import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import HomeHeader from '../routes/HomeHeader'
import FurtherHeader from '../routes/FurtherHeader'

const SearchFilter: React.FC = () => {
   return (
      <>
         <Link to="/">home</Link>
         <Link to="/details">details</Link>

         <Routes>
            <Route path="/" element={<HomeHeader />} />
            <Route path="/details" element={<FurtherHeader />} />
            {/* inline component rendering to fix CSS bugs? */}
         </Routes>
      </>
   )
}

export default SearchFilter
