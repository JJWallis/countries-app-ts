import React, { useState, useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme, theme } from './components/styled/Theme'
import Header from './components/Header'
import Main from './components/Main'
import { useDarkMode } from './hooks/useDarkMode'
import axios from 'axios'
import { Context } from './components/Context'
import { CountriesProvider } from './context/countriesContext'

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

export type data = Country[] | null

const App: React.FC = () => {
   const [countries, setCountries] = useState<data>(null)
   const [furtherDetails, setFurtherDetails] = useState<data>(null)
   const [filteredRegions, setFilteredRegions] = useState<data>(null)
   const [homepage, setHomepage] = useState(true)
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState<theme>(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [error, setError] = useState(false)
   const fetchError = useRef(false)

   function fetchData(endpoint: string) {
      axios
         .get<data>(endpoint)
         .then((value) => setCountries(value.data))
         .catch((err) => {
            fetchError.current = true
            setError(true)
            console.error(err.message)
         })
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

   const handleFurtherDetails = (country: string) => {
      const countryData = countries?.filter(
         ({ name, cioc, cca3 }) =>
            name?.common.toLowerCase() === country.toLowerCase() ||
            cioc === country ||
            cca3 === country
      )
      if (countryData && countryData.length > 0) {
         error && setError(false)
         setFurtherDetails(countryData)
         homepage && setHomepage(false)
      } else {
         setError(true)
      }
   }

   const handleFilterRegions = (region: string) => {
      if (region === '') {
         setFilteredRegions(null)
      } else {
         const filteredData = countries?.filter(
            (country) => country.region.toLowerCase() === region.toLowerCase()
         )
         filteredData && setFilteredRegions(filteredData)
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <CountriesProvider>
            <Context.Provider
               value={{
                  // countries,
                  homepage,
                  setHomepage,
                  handleThemeChange,
                  furtherDetails,
                  handleFurtherDetails,
                  filteredRegions,
                  handleFilterRegions,
                  error,
                  // fetchError,
               }}
            >
               <GlobalStyles />
               <Header />
               <Main />
            </Context.Provider>
         </CountriesProvider>
      </ThemeProvider>
   )
}

export default App
