import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../routes/HomeMain'
import FurtherMain from '../routes/FurtherMain'
import ErrorFallback from './ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'

const CountriesContainer: FC = () => {
   return (
      <>
         <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
               <Route path="/" element={<HomeMain />} />
               <Route path="/details/:country" element={<FurtherMain />} />
               <Route path="*" element={<ErrorFallback />} />
            </Routes>
         </ErrorBoundary>
      </>
   )
}

export default CountriesContainer
