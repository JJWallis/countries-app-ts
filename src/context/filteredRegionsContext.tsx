import React from 'react'
import type { CountryData } from '../types/countriesContext.interface'

type FilteredRegionsDispatch = (region: string) => void

export const FilteredRegionsContext = React.createContext<CountryData | null>(
   null
)

export const FilterdRegionsDispatch =
   React.createContext<FilteredRegionsDispatch | null>(null)

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
      <FilteredRegionsContext.Provider value={filteredRegions}>
         <FilterdRegionsDispatch.Provider value={handleFilterRegions}>
            {children}
         </FilterdRegionsDispatch.Provider>
      </FilteredRegionsContext.Provider>
   )
}
