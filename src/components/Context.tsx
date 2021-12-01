import React, { ReactNode } from 'react'
import { data } from '../App'

interface ContextInterface {
   countries: data
   furtherDetails: data
   homepage: boolean
   filteredRegions: data
   error: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
   handleFurtherDetails: (country: string) => void
   handleFilterRegions: (region: string) => void
   fetchError: React.MutableRefObject<boolean>
}

const Context = React.createContext<ContextInterface | null>(null)

const ContextProvider = (children: ReactNode) => {
   //    return <Context.Provider value={}></Context.Provider>
}

export default Context
