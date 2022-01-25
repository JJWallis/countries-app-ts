import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountriesProvider } from '../context/countriesContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('handleThemeChange callback executed', async () => {
   const themeChange = jest.fn()
   render(
      <CountriesProvider>
         <BrowserRouter>
            <ThemeSwitcher handleThemeChange={themeChange} />
         </BrowserRouter>
      </CountriesProvider>
   )
   const checkbox = screen.getByRole('checkbox')
   userEvent.click(checkbox)
   expect(checkbox).toBeChecked()
   expect(themeChange).toHaveBeenCalledTimes(2)
})
