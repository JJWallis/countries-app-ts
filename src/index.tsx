import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CountriesProvider } from './context/countriesContext'

ReactDOM.render(
   <React.StrictMode>
      <CountriesProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/*" element={<App />} />
            </Routes>
         </BrowserRouter>
      </CountriesProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
