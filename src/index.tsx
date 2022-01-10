import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CountriesProvider } from './context/countriesContext'

ReactDOM.render(
   <React.StrictMode>
      <CountriesProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </CountriesProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
