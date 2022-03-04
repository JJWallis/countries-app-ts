import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../routes/HomeMain'
import FurtherMain from '../routes/FurtherMain'
import ErrorFallback from './ErrorFallback'

const CountriesContainer: FC = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/details/:country" element={<FurtherMain />} />
            <Route path="*" element={<ErrorFallback />} />
         </Routes>
      </>
   )
}

export default CountriesContainer
