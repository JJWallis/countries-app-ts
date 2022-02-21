import React from 'react'
import { countriesRender, render } from './test-utils'
import BorderCountries from '../components/BorderCountries'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const country = CountryMockTest[0]
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const borders = country.borders.map((border) => border)
   const { getAllByRole, getByRole, getByText, getAllByTestId } =
      countriesRender(<BorderCountries country={country} />, { providerProps })
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
   const { getByText, queryByRole, getAllByRole } = render(
      <BorderCountries country={CountryMockTest} />
   )
   const fallbackBtn = getByText(/no bordering countries/i)

   expect(fallbackBtn).toBeDisabled()
   expect(fallbackBtn).toHaveStyle('cursor: not-allowed')

   expect(getByText(/border countries/i)).toBeInTheDocument()
   expect(queryByRole('link')).not.toBeInTheDocument()
   expect(getAllByRole('button')).toHaveLength(1)
})
