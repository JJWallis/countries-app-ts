import React, { useState } from 'react'
import GlobalStyles from './components/styled/GlobalStyles'
<<<<<<< HEAD
import { darkTheme, lightTheme } from './components/styled/Theme'
=======
>>>>>>> cc581c5a8799425f31d93183e5f20663ad1637e3
import Header from './components/Header'
import Main from './components/Main'
import { Context } from './components/Context'
import { useCountriesContext } from './hooks/useCountriesContext'
import { data } from './context/countriesContext'

const App: React.FC = () => {
   const [furtherDetails, setFurtherDetails] = useState<data>(null)
   const [filteredRegions, setFilteredRegions] = useState<data>(null)
   const [homepage, setHomepage] = useState(true)
<<<<<<< HEAD
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )
=======
>>>>>>> cc581c5a8799425f31d93183e5f20663ad1637e3
   const [error, setError] = useState(false)
   const { countries } = useCountriesContext()

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
      <Context.Provider
         value={{
            homepage,
            setHomepage,
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
   )
}

export default App
