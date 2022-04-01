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
import type { CountryData } from './types/countriesContext.interface'

const App: FC = () => {
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [countries, setCountries] = useState<CountryData>(null)
   const [countriesError, setCountriesError] = useState(false)

   const handleThemeChange = useCallback(
      (dark: boolean) => (dark ? setTheme(darkTheme) : setTheme(lightTheme)),
      []
   )

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data } = await axios.get<CountryData>(
               'https://restcountries.com/v3.1/all'
            )
            setCountries(data)
         } catch (error: any) {
            setCountriesError(true)
            console.error(error.message)
         }
      }
      fetchData()
   }, [])

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
