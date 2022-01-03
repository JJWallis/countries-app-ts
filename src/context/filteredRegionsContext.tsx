import React, { ReactNode, useState } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { CountryData } from '../context/countriesContext'

interface FilteredRegionsContextData {
   filteredRegions: CountryData
   handleFilterRegions: (region: string) => void
}

export const FurtherDetailsContext =
   React.createContext<FilteredRegionsContextData | null>(null)

export const FurtherDetailsProvider = ({
   children,
}: {
   children: ReactNode
}) => {
   const [filteredRegions, setFilteredRegions] = useState<CountryData>(null)
   const { countries } = useCountriesContext()

   const handleFilterRegions = (region: string) => {
      if (region === '') {
         setFilteredRegions(null)
      } else {
         const filteredData = countries?.filter(
            (country) => country.region.toLowerCase() === region.toLowerCase()
         )
         filteredData && setFilteredRegions(filteredData)
      }
   }

   return (
      <FurtherDetailsContext.Provider
         value={{ filteredRegions, handleFilterRegions }}
      >
         {children}
      </FurtherDetailsContext.Provider>
   )
}
