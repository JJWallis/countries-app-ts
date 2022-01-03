import React from 'react'
import { CountryData } from '../context/countriesContext'

export interface ContextInterface {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
   handleThemeChange: (dark: boolean) => void
}

export const Context = React.createContext<ContextInterface | null>(null)
