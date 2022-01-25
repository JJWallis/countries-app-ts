import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountriesProvider } from '../context/countriesContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { BrowserRouter } from 'react-router-dom'

beforeEach(() => {
   const themeChange = jest.fn()

   render(
      <CountriesProvider>
         <BrowserRouter>
            <ThemeSwitcher handleThemeChange={themeChange} />
         </BrowserRouter>
      </CountriesProvider>
   )
})
