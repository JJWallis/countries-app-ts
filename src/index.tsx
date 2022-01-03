import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CountriesProvider } from './context/countriesContext'
import { CountriesThemeProvider } from './context/themeContext'

ReactDOM.render(
   <React.StrictMode>
      <CountriesThemeProvider>
         <CountriesProvider>
            <App />
         </CountriesProvider>
      </CountriesThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
