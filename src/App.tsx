import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme, theme } from './components/styled/Theme'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export type context = {
   countries: {}[] | null
   homepage: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
} | null

export const Context = React.createContext<context>(null)

interface CountryDetails {
   flags: { svg: string }
   name: { common: string; nativeName: { fra: { commmon: string } } }
   population: string
   region: string
   subregion: string
   capital: string
   tld: string[]
}

const App: React.FC = () => {
   const [countries, setCountries] = useState<{}[] | null>(null)
   const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(
      null
   )
   const [homepage, setHomepage] = useState(true)
   const [theme, setTheme] = useState<theme>(lightTheme)

   // countryDetails state - null default value + { with all relevant data (take type from CountryCard props) }
   // handleCountryDetails func - take either user input (from Search) or name.common from CountryCard user clicks on
   // find() obj in original countries data which matches country usr wants + update countryDetails state with it
   // update homepage state to false at same time (but check if not already falsy so doesn't unecessarily re-render?)

   function fetchData(endpoint: string) {
      axios
         .get(endpoint)
         .then((data: any) => {
            setCountries(data.data)
            console.log(data.data)
         })
         .catch((err) => console.log(err.message))
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

   return (
      <ThemeProvider theme={theme}>
         <Context.Provider
            value={{
               countries,
               homepage,
               setHomepage,
               handleThemeChange,
            }}
         >
            <GlobalStyles />
            <Header />
            <Main />
         </Context.Provider>
      </ThemeProvider>
   )
}

export default App
