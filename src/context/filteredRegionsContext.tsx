import React from 'react'
import { CountryData } from '../types/countriesContext.interface'

interface FilteredRegionsInterface {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
}

export const FilteredRegionsContext =
   React.createContext<FilteredRegionsInterface | null>(null)

export const FilteredRegionsProvider = ({
   children,
   filteredRegions,
   handleFilterRegions,
}: {
   children: React.ReactNode
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
}) => {
   return (
      <FilteredRegionsContext.Provider
         value={{ filteredRegions, handleFilterRegions }}
      >
         {children}
      </FilteredRegionsContext.Provider>
   )
}
