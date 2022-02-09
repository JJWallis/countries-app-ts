import React from 'react'
import { FilterdRegionsDispatch } from '../context/filteredRegionsContext'

export function useFilteredRegionsDispatch() {
   const dispatch = React.useContext(FilterdRegionsDispatch)
   if (!dispatch) {
      throw new Error(
         'useFilteredRegionsDispatch must be used within a FilteredRegionsProvider'
      )
   }
   return dispatch
}
