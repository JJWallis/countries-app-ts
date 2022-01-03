import React, { ReactNode, useState, useEffect, useRef } from 'react'
import axios from 'axios'

export interface Country {
   name: { common: string; nativeName: { official: string }[] }
   cioc: string
   cca3: string
   region: string
   borders: string[]
   flags: {
      svg: string
   }
   currencies: { name: string }[]
   languages: string[]
   population: number
   subregion: string
   capital: string
   tld: string[]
}

export type CountryData = Country[] | null

interface ContextInterface {
   countries: CountryData
   countriesError: boolean
   fetchError: React.MutableRefObject<boolean>
}

export const CountriesContext = React.createContext<ContextInterface | null>(
   null
)

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
   const [countries, setCountries] = useState<CountryData>(null)
   const [countriesError, setCountriesError] = useState(false)
   const fetchError = useRef(false)

   function fetchData(endpoint: string) {
      axios
         .get<CountryData>(endpoint)
         .then((value) => setCountries(value.data))
         .catch((err) => {
            fetchError.current = true
            setCountriesError(true)
            console.error(err.message)
         })
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   return (
      <CountriesContext.Provider
         value={{ countries, countriesError, fetchError }}
      >
         {children}
      </CountriesContext.Provider>
   )
}
