import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FurtherDetailsParent } from './containers/FurtherDetailsContainers.styled'
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
         </Routes>
      </>
   )
}

export default CountriesContainer
