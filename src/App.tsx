import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles'
import { darkTheme, lightTheme, theme } from './components/styled/Theme'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export type context = {
   countries: {}[] | null
   homepage: boolean
   setHomepage: React.Dispatch<React.SetStateAction<boolean>>
   setTheme: React.Dispatch<React.SetStateAction<theme | null>>
} | null

export const Context = React.createContext<context>(null)

const App: React.FC = () => {
   const [countries, setCountries] = useState<{}[] | null>(null)
   const [homepage, setHomepage] = useState(true)
   const [theme, setTheme] = useState<theme | null>(null)

   function fetchData(endpoint: string) {
      axios
         .get(endpoint)
         .then((data: any) => setCountries(data.data))
         .catch((err) => console.log(err.message))
   }

   useEffect(() => fetchData('https://restcountries.com/v3.1/all'), [])

   return (
      <ThemeProvider theme={darkTheme}>
         <Context.Provider
            value={{
               countries,
               homepage,
               setHomepage,
               setTheme,
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
