import React, { ReactNode } from 'react'
import type {
   CountryData,
   ContextInterface,
} from '../types/countriesContext.interface'

export const CountriesContext = React.createContext<ContextInterface | null>(
   null
)

export const CountriesProvider = ({
   children,
   countries,
   countriesError,
}: {
   children: ReactNode
   countries: CountryData
   countriesError: boolean
}) => {
   return (
      <CountriesContext.Provider value={{ countries, countriesError }}>
         {children}
      </CountriesContext.Provider>
   )
}
