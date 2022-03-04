import React, { useState, FC, useEffect, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { CountriesProvider } from './context/countriesContext'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './components/styled/Theme'
import axios from 'axios'
import GlobalStyles from './components/styled/GlobalStyles'
import Header from './components/Header'
import Main from './components/Main'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useErrorHandler } from 'react-error-boundary'
import type { CountryData } from './types/countriesContext.interface'

const App: FC = () => {
   const prefersDarkMode = useDarkMode()
   const handleError = useErrorHandler()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [countries, setCountries] = useState<CountryData>(null)
   const [countriesError, setCountriesError] = useState(false)

   const handleThemeChange = useCallback(
      (dark: boolean) => (dark ? setTheme(darkTheme) : setTheme(lightTheme)),
      []
   )

   const fetchData = useCallback(async () => {
      try {
         const { data } = await axios.get<CountryData>(
            'https://restcountries.com/v3.1/all'
         )
         setCountries(data)
      } catch (error) {
         setCountriesError(true)
         handleError(error)
      }
   }, [handleError])

   useEffect(() => {
      fetchData()
   }, [fetchData])

   return (
      <ThemeProvider theme={theme}>
         <CountriesProvider
            countries={countries}
            countriesError={countriesError}
         >
            <GlobalStyles />
            <Header>
               <ThemeSwitcher handleThemeChange={handleThemeChange} />
            </Header>
            <Main />
         </CountriesProvider>
      </ThemeProvider>
   )
}

export default App
