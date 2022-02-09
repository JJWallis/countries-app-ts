import React, { useState, FC, useCallback } from 'react'
import StyledMain from './styled/StyledMain'
import { MainContainer } from './containers/MainContainer.styled'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'
import { CountryData } from '../types/countriesContext.interface'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'

const Main: FC = () => {
   const [filteredRegions, setFilteredRegions] = useState<CountryData>(null)
   const { countries } = useCountriesContext()

   const handleFilterRegions = useCallback(
      (region: string) => {
         if (!region) {
            setFilteredRegions(null)
            return
         }
         const filteredData = countries?.filter(
            (country) => country.region.toLowerCase() === region.toLowerCase()
         )
         filteredData && setFilteredRegions(filteredData)
      },
      [countries]
   )

   return (
      <FilteredRegionsProvider
         filteredRegions={filteredRegions}
         handleFilterRegions={handleFilterRegions}
      >
         <StyledMain>
            <MainContainer>
               <SearchFilter />
               <Countries />
            </MainContainer>
         </StyledMain>
      </FilteredRegionsProvider>
   )
}

export default Main
