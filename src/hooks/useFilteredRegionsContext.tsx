import { useContext } from 'react'
import { FilteredRegionsContext } from '../context/filteredRegionsContext'

export function useFilteredRegionsContext() {
   const context = useContext(FilteredRegionsContext)
   if (!context) {
      throw new Error(
         'useFilteredRegionsContext must be used within a useFilteredRegionsContextProvider'
      )
   }
   return context
}
