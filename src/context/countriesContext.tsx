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

type data = Country[] | null

interface ContextInterface {
   countries: data
   countriesError: boolean
   fetchError: React.MutableRefObject<boolean>
}

const CountriesContext = React.createContext<ContextInterface | null>(null)

export const CountriesProvider = (children: ReactNode) => {
   const [countries, setCountries] = useState<data>(null)
   const [countriesError, setCountriesError] = useState(false)
   const fetchError = useRef(false)

   function fetchData(endpoint: string) {
      axios
         .get<data>(endpoint)
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
