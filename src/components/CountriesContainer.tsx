import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FurtherDetailsParent } from './containers/FurtherDetailsContainers.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import HomeMain from '../routes/HomeMain'
import FurtherDetails from './FurtherDetails'

const CountriesContainer: React.FC = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route
               path="/details/:country"
               element={
                  <FurtherDetailsParent>
                     <FurtherDetails />
                  </FurtherDetailsParent>
               }
            />
            <Route
               path="*"
               element={
                  <ErrorMsg>404 error - this page doesn't exist</ErrorMsg>
               }
            />
         </Routes>
      </>
   )
}

export default CountriesContainer
