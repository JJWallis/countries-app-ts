import React, { ReactNode, useState, useEffect } from 'react'
import {
   CountryData,
   ContextInterface,
} from '../types/countriesContext.interface'
import axios from 'axios'

export const CountriesContext = React.createContext<ContextInterface | null>(
   null
)

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
   const [countries, setCountries] = useState<CountryData>(null)
   const [countriesError, setCountriesError] = useState(false)

   function fetchData(endpoint: string) {
      axios
         .get<CountryData>(endpoint)
         .then((value) => {
            setCountries(value.data)
            console.log(value.data)
         })
         .catch((err) => {
            setCountriesError(true)
            console.error(err.message)
         })
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   return (
      <CountriesContext.Provider value={{ countries, countriesError }}>
         {children}
      </CountriesContext.Provider>
   )
}
