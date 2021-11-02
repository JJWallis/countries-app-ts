import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme } from './components/styled/Theme'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export const Context = React.createContext<{
   countries: {}[] | null
   homepage: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

const App: React.FC = () => {
   const [countries, setCountries] = useState<{}[] | null>(null)
   const [homepage, setHomepage] = useState(true)

   function fetchData(endpoint: string) {
      axios
         .get(endpoint)
         .then((data: any) => {
            const info = data.data
            if (info.length > 30) {
               setCountries(info.slice(0, 30))
            } else {
               setCountries(info)
            }
         })
         .catch((err) => console.log(err.message))
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   return (
      <ThemeProvider theme={darkTheme}>
         <Context.Provider
            value={{
               countries: countries,
               homepage: homepage,
               setHomepage: setHomepage,
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
