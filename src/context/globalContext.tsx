import React from 'react'
import { CountryData } from '../types/countriesContext.interface'

export interface GlobalContextInterface {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
   handleThemeChange: (dark: boolean) => void
}

export const GlobalContext = React.createContext<GlobalContextInterface | null>(
   null
)
