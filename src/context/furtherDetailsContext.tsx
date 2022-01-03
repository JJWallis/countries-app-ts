import React, { ReactNode, useState } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { CountryData } from './countriesContext'

interface FurtherDetailsContextData {
   furtherDetails: CountryData | null
   handleFurtherDetails: (country: string) => void
   homepage: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   furtherDetailsError: boolean
}

export const FurtherDetailsContext =
   React.createContext<FurtherDetailsContextData | null>(null)

export const FurtherDetailsProvider = ({
   children,
}: {
   children: ReactNode
}) => {
   const [furtherDetails, setFurtherDetails] = useState<CountryData>(null)
   const [furtherDetailsError, setFurtherDetailsError] = useState(false)
   const [homepage, setHomepage] = useState(true)
   // infered from furtherDetails - set to null to return to homepage
   const { countries } = useCountriesContext()

   const handleFurtherDetails = (country: string) => {
      const countryData = countries?.filter(
         ({ name, cioc, cca3 }) =>
            name?.common.toLowerCase() === country.toLowerCase() ||
            cioc === country ||
            cca3 === country
      )
      if (countryData && countryData.length) {
         furtherDetailsError && setFurtherDetailsError(false)
         setFurtherDetails(countryData)
         homepage && setHomepage(false)
         return
      }
      setFurtherDetailsError(true)
   }

   return (
      <FurtherDetailsContext.Provider
         value={{
            furtherDetails,
            handleFurtherDetails,
            homepage,
            setHomepage,
            furtherDetailsError,
         }}
      >
         {children}
      </FurtherDetailsContext.Provider>
   )
}
