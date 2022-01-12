import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryCard from '../components/CountryCard'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import HomeMain from '../routes/HomeMain'
import FurtherMain from '../routes/FurtherMain'
import BackButton from './BackButton'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useFilteredRegionsContext } from '../hooks/useFilteredRegionsContext'

const CountriesContainer: FC = () => {
   const { countries } = useCountriesContext()
   const { filteredRegions } = useFilteredRegionsContext()
   const data = !filteredRegions ? countries : filteredRegions

   const produceCountries = () => {
      return data?.map((country, idx) => (
         <CountryCard key={idx} data={country} />
      ))
   }

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
