import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CountriesProvider } from './context/countriesContext'

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <CountriesProvider>
            <App />
         </CountriesProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
)
