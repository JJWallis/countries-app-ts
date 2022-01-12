import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import HomeMain from '../routes/HomeMain'
import FurtherMain from '../routes/FurtherMain'
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
                  <>
                     <SearchFilterContainer>
                        <BackButton />
                     </SearchFilterContainer>
                     <ErrorMsg>
                        404
                        <br /> Please return to homepage
                     </ErrorMsg>
                  </>
               }
            />
         </Routes>
      </>
   )
}

export default CountriesContainer
