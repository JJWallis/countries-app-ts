import React, { ReactNode, useState } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { CountryData } from './countriesContext'

interface FurtherDetailsContextData {
   furtherDetails: CountryData | null
   setFurtherDetails: React.Dispatch<React.SetStateAction<CountryData | null>>
   handleFurtherDetails: (country: string) => boolean
}

export const FurtherDetailsContext =
   React.createContext<FurtherDetailsContextData | null>(null)

export const FurtherDetailsProvider = ({
   children,
}: {
   children: ReactNode
}) => {
   const [furtherDetails, setFurtherDetails] = useState<CountryData>(null)
   const { countries } = useCountriesContext()

   const handleFurtherDetails = (country: string) => {
      const countryData = countries?.filter(
         ({ name, cioc, cca3 }) =>
            name?.common.toLowerCase() === country.toLowerCase() ||
            cioc === country ||
            cca3 === country
      )
      // find() instead
      if (countryData && countryData.length) {
         setFurtherDetails(countryData)
         return true
      }
      return false
   }

   return (
      <FurtherDetailsContext.Provider
         value={{
            furtherDetails,
            setFurtherDetails,
            handleFurtherDetails,
         }}
      >
         {children}
      </FurtherDetailsContext.Provider>
   )
}
