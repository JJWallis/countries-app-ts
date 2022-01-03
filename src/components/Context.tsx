import React from 'react'
import { data } from '../App'
export interface ContextInterface {
   furtherDetails: data
   homepage: boolean
   filteredRegions: data
   error: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleFurtherDetails: (country: string) => void
   handleFilterRegions: (region: string) => void
}

export const Context = React.createContext<ContextInterface | null>(null)
