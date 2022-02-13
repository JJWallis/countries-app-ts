import React from 'react'
import { render, screen } from './test-utils'
import BorderCountries from '../components/BorderCountries'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('markup renders correctly', () => {
   render(<BorderCountries country={CountryMockTest[0]} />)
   const link = screen.getByRole('link', { name: 'hi' })
   const button = screen.getByRole('button', { name: 'hi' })

   expect(link).toHaveAttribute('href', '/details/hi')
   expect(screen.getAllByRole('link')).toHaveLength(1)
   expect(button).toHaveTextContent('hi')
   expect(button).toBeEnabled()
   expect(screen.getByText(/border countries/i)).toBeInTheDocument()

   // screen.getByRole('')
})

test('fallback button renders with undefined data', () => {
   render(<BorderCountries country={CountryMockTest} />)
   const link = screen.queryByRole('link')
   const button = screen.getByText(/no bordering countries/i)

   expect(link).not.toBeInTheDocument()

   screen.getByRole('')
})
