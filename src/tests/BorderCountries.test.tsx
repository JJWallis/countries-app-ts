import React from 'react'
import { render } from './test-utils'
import BorderCountries from '../components/BorderCountries'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const country = CountryMockTest[0]
   const borders = country.borders.map((border) => border)
   const { getAllByRole, getByRole, getByText, getAllByTestId } = render(
      <BorderCountries country={country} />
   )
   const link = getByRole('link', { name: 'hi' })
   const button = getByRole('button', { name: 'hi' })
   const btns = getAllByTestId('border-btn').map(
      (btn) => btn.textContent
   ) as string[]

   expect(link).toBeInTheDocument()
   expect(button).toBeInTheDocument()
   expect(getByText(/border countries/i)).toBeInTheDocument()

   expect(link).toHaveAttribute('href', '/details/hi')
   expect(getAllByRole('link')).toHaveLength(1)

   expect(button).toBeEnabled()
   expect(button).toHaveTextContent('hi')

   expect(borders).toEqual(btns)
})

test('fallback button renders with undefined country', () => {
   const { getByText, queryByRole, getAllByRole, getByRole } = render(
      <BorderCountries country={CountryMockTest} />
   )
   const fallbackBtn = getByText(/no bordering countries/i)

   expect(getByText(/border countries/i)).toBeInTheDocument()
   expect(queryByRole('link')).not.toBeInTheDocument()
   expect(fallbackBtn).toBeDisabled()
   expect(getAllByRole('button')).toHaveLength(1)

   getByRole('')
})
