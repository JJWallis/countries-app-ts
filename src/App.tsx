import React, { useState, FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { CountriesProvider } from './context/countriesContext'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { CountryData } from './types/countriesContext.interface'
import axios from 'axios'
import GlobalStyles from './components/styled/GlobalStyles'
import Header from './components/Header'
import Main from './components/Main'

const App: FC = () => {
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [countries, setCountries] = useState<CountryData>(null)
   const [countriesError, setCountriesError] = useState(false)

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

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
      <ThemeProvider theme={theme}>
         <CountriesProvider>
            <GlobalStyles />
            <Header handleThemeChange={handleThemeChange} />
            <Main />
         </CountriesProvider>
      </ThemeProvider>
   )
}

export default App
