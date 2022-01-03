import React from 'react'
import { data } from '../App'
export interface ContextInterface {
   // countries: data
   furtherDetails: data
   homepage: boolean
   filteredRegions: data
   error: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
   handleFurtherDetails: (country: string) => void
   handleFilterRegions: (region: string) => void
   // fetchError: React.MutableRefObject<boolean>
}

export const Context = React.createContext<ContextInterface | null>(null)
