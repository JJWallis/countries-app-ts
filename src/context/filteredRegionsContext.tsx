import React from 'react'
import { CountryData } from '../types/countriesContext.interface'

interface FilteredRegionsInterface {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
}

export const FilteredRegionsContext =
   React.createContext<FilteredRegionsInterface | null>(null)
