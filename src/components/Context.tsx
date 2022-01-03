import React from 'react'
import { CountryData } from '../context/countriesContext'

export interface ContextInterface {
   furtherDetails: CountryData
   homepage: boolean
   filteredRegions: CountryData
   error: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
   handleFurtherDetails: (country: string) => void
   handleFilterRegions: (region: string) => void
}

export const Context = React.createContext<ContextInterface | null>(null)
