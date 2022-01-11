import React from 'react'
import { CountryData } from '../types/countriesContext.interface'

export interface GlobalContextInterface {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
}

export const GlobalContext = React.createContext<GlobalContextInterface | null>(
   null
)
