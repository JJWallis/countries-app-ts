import React from 'react'
import { CountryData } from '../context/countriesContext'

export interface ContextInterface {
   // furtherDetails: CountryData
   // handleFurtherDetails: (country: string) => void
   // homepage: boolean
   // setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   // error: boolean
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
   handleThemeChange: (dark: boolean) => void
}

export const Context = React.createContext<ContextInterface | null>(null)
