import { useContext } from 'react'
import { FurtherDetailsContext } from '../context/furtherDetailsContext'

export function useFurtherDetailsContext() {
   const context = useContext(FurtherDetailsContext)
   if (context === undefined) {
      throw new Error(
         'useFurtherDetailsContext must be used within a FurtherDetailsProvider'
      )
   }
   return context
}
