import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from './context/globalContext'
import { useCountriesContext } from './hooks/useCountriesContext'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { CountryData } from './context/countriesContext'
import GlobalStyles from './components/styled/GlobalStyles'
import Header from './components/Header'
import Main from './components/Main'

const App: React.FC = () => {
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const [filteredRegions, setFilteredRegions] = useState<CountryData>(null)
   const { countries } = useCountriesContext()

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

   const handleFilterRegions = (region: string) => {
      if (!region) {
         setFilteredRegions(null)
         return
      }
      const filteredData = countries?.filter(
         (country) => country.region.toLowerCase() === region.toLowerCase()
      )
      filteredData && setFilteredRegions(filteredData)
   }

   return (
      <ThemeProvider theme={theme}>
         <GlobalContext.Provider
            value={{
               handleThemeChange,
               filteredRegions,
               handleFilterRegions,
            }}
         >
            <GlobalStyles />
            <Header />
            <Main />
         </GlobalContext.Provider>
      </ThemeProvider>
   )
}

export default App
