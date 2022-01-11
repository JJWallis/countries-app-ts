import { useContext } from 'react'
import { FilteredRegionsContext } from '../context/filteredRegionsContext'

export function useFilteredRegionsContext() {
   const context = useContext(FilteredRegionsContext)
   if (!context) {
      throw new Error(
         'useGlobalContext must be used within a GlobalContextProvider'
      )
   }
   return context
}
