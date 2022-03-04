import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from '../routes/HomeMain'
import FurtherMain from '../routes/FurtherMain'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import BackButton from './BackButton'

const CountriesContainer: FC = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/details/:country" element={<FurtherMain />} />
            <Route
               path="*"
               element={
                  <SearchFilterContainer>
                     <BackButton />
                  </SearchFilterContainer>
               }
            />
         </Routes>
      </>
   )
}

export default CountriesContainer
