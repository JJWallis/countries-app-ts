import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CountriesProvider } from './context/countriesContext'

ReactDOM.render(
   <React.StrictMode>
      <CountriesProvider>
         <App />
      </CountriesProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
