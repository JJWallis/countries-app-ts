import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export const Context = React.createContext(null)

const App: React.FC = () => {
   const [countries, setCountries] = useState(null)

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
      <Context.Provider value={countries && countries}>
         <Header />
         <Main />
      </Context.Provider>
   )
}

export default App
