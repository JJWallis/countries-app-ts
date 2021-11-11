import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme, theme } from './components/styled/Theme'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

interface ContextInterface {
   countries: data
   furtherDetails: data
   homepage: boolean
   filteredRegions: data
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   handleThemeChange: (dark: boolean) => void
   handleFurtherDetails: (country: string) => void
   handleFilterRegions: (region: string) => void
}

type data =
   | { name: { common: string }; cioc: string; cca3: string; region: string }[]
   | null

export const Context = React.createContext<ContextInterface | null>(null)

const App: React.FC = () => {
   const [countries, setCountries] = useState<data>(null)
   const [furtherDetails, setFurtherDetails] = useState<data>(null)
   const [filteredRegions, setFilteredRegions] = useState<data>(null)
   const [homepage, setHomepage] = useState(true)
   const [theme, setTheme] = useState<theme>(lightTheme)

   function fetchData(endpoint: string) {
      axios
         .get<data>(endpoint)
         .then((value) => {
            setCountries(value.data)
            console.log(value.data)
         })
         .catch((err) => console.log(err.message))
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
         setFurtherDetails(countryData)
         homepage && setHomepage(false)
      } else {
         alert('Country not found')
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
               countries,
               homepage,
               setHomepage,
               handleThemeChange,
               furtherDetails,
               handleFurtherDetails,
               filteredRegions,
               handleFilterRegions,
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
