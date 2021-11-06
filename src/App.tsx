import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme, theme } from './components/styled/Theme'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export type context = {
   countries: data
   countryDetails: data
   homepage: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
   handleCountryDetails: (country: string) => void
} | null

type data = {}[] | null

export const Context = React.createContext<context>(null)

const App: React.FC = () => {
   const [countries, setCountries] = useState<data>(null)
   const [countryDetails, setCountryDetails] = useState<data>(null)
   const [homepage, setHomepage] = useState(true)
   const [theme, setTheme] = useState<theme>(lightTheme)

   function fetchData(endpoint: string) {
      axios
         .get(endpoint)
         .then((data: any) => setCountries(data.data))
         .catch((err) => console.log(err.message))
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

   const handleCountryDetails = (country: string) => {
      const countryData = countries?.filter(
         (item: any) => item.name.common === country
      )
      if (countryData && countryData.length > 0) {
         setCountryDetails(countryData)
         homepage && setHomepage(false)
      } else {
         // validation
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <Context.Provider
            value={{
               countries,
               homepage,
               setHomepage,
               handleThemeChange,
               countryDetails,
               handleCountryDetails,
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
