import React, { useState, FC } from 'react'
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

   const handleFilterRegions = (region: string) => {
      if (!region) {
         setFilteredRegions(null)
         return
      }
      const filteredData = countries?.filter(
         (country) => country.region.toLowerCase() === region.toLowerCase()
      )
      filteredData && setFilteredRegions(filteredData)
   }

   return (
      <StyledMain>
         <MainContainer>
            <FilteredRegionsProvider
               filteredRegions={filteredRegions}
               handleFilterRegions={handleFilterRegions}
            >
               <SearchFilter />
               <Countries />
            </FilteredRegionsProvider>
         </MainContainer>
      </StyledMain>
   )
}

export default Main
