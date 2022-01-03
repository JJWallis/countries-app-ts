import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FurtherDetailsProvider } from './context/furtherDetailsContext'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme } from './components/styled/Theme'
import Header from './components/Header'
import Main from './components/Main'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalContext } from './context/globalContext'
import { useCountriesContext } from './hooks/useCountriesContext'
import { CountryData } from './context/countriesContext'

const App: React.FC = () => {
   const [filteredRegions, setFilteredRegions] = useState<CountryData>(null)
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
   const { countries } = useCountriesContext()

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

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
         <GlobalContext.Provider
            value={{
               handleThemeChange,
               filteredRegions,
               handleFilterRegions,
            }}
         >
            <FurtherDetailsProvider>
               <GlobalStyles />
               <Header />
               <Main />
            </FurtherDetailsProvider>
         </GlobalContext.Provider>
      </ThemeProvider>
   )
}

export default App
