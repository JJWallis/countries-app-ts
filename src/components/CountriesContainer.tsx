import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FurtherDetailsParent } from './containers/FurtherDetailsContainers.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import HomeMain from '../routes/HomeMain'
import FurtherDetails from './FurtherDetails'
import { Link } from 'react-router-dom'
import Button from '../components/styled/StyledButton'
import Icon from '../components/styled/Icon'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'

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
                        <Link to="/">
                           <Button back>Back</Button>
                           <Icon
                              arrow
                              aria-hidden="true"
                              focusable="false"
                              viewBox="0 0 448 512"
                           >
                              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                           </Icon>
                        </Link>
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
