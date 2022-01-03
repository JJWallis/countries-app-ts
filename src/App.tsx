import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme } from './components/styled/Theme'
import Header from './components/Header'
import Main from './components/Main'
import { useDarkMode } from './hooks/useDarkMode'
import { Context } from './components/Context'
import { useCountriesContext } from './hooks/useCountriesContext'

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
   const [furtherDetails, setFurtherDetails] = useState<data>(null)
   const [filteredRegions, setFilteredRegions] = useState<data>(null)
   const [homepage, setHomepage] = useState(true)
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [error, setError] = useState(false)
   const { countries } = useCountriesContext()

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
         <Context.Provider
            value={{
               homepage,
               setHomepage,
               handleThemeChange,
               furtherDetails,
               handleFurtherDetails,
               filteredRegions,
               handleFilterRegions,
               error,
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
