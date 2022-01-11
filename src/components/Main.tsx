import React, { useState } from 'react'
import StyledMain from './styled/StyledMain'
import { MainContainer } from './containers/MainContainer.styled'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'
import { CountryData } from '../types/countriesContext.interface'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { GlobalContext } from '../context/filteredRegionsContext'

const Main: React.FC = () => {
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
            <GlobalContext.Provider
               value={{
                  filteredRegions,
                  handleFilterRegions,
               }}
            >
               <SearchFilter />
               <Countries />
            </GlobalContext.Provider>
         </MainContainer>
      </StyledMain>
   )
}

export default Main
