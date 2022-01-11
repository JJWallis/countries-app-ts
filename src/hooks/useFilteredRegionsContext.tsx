import { useContext } from 'react'
import { FilteredRegionsContext } from '../context/filteredRegionsContext'

export function useGlobalContext() {
   const context = useContext(FilteredRegionsContext)
   if (!context) {
      throw new Error(
         'useGlobalContext must be used within a GlobalContextProvider'
      )
   }
   return context
}
