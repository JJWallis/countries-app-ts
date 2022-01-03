import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
<<<<<<< HEAD
import { CountriesProvider } from './context/countriesContext'
import { CountriesThemeProvider } from './context/themeContext'

ReactDOM.render(
   <React.StrictMode>
      <CountriesThemeProvider>
         <CountriesProvider>
            <App />
         </CountriesProvider>
      </CountriesThemeProvider>
=======

ReactDOM.render(
   <React.StrictMode>
      <App />
>>>>>>> parent of 5aad04b (CountriesContext working)
   </React.StrictMode>,
   document.getElementById('root')
)
