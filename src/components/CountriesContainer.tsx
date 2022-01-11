import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FurtherDetailsParent } from './containers/FurtherDetailsContainers.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import HomeMain from '../routes/HomeMain'
import FurtherDetails from './FurtherDetails'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import BackButton from './BackButton'

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
                  <>
                     <SearchFilterContainer>
                        <BackButton />
                     </SearchFilterContainer>
                     <ErrorMsg>
                        404
                        <br /> please return to homepage
                     </ErrorMsg>
                  </>
               }
            />
         </Routes>
      </>
   )
}

export default CountriesContainer
