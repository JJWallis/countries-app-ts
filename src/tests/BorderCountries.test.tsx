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
   const borderTotal = borders.length
   const { getAllByRole, getByText, getAllByTestId } = countriesRender(
      <BorderCountries country={country} />,
      { providerProps }
   )
   const links = getAllByRole('link')
   const btns = getAllByTestId('border-btn')

   expect(getByText(/border countries/i)).toBeInTheDocument()

   expect(links).toHaveLength(borderTotal)
   expect(btns).toHaveLength(borderTotal)

   links.map((link) =>
      expect(link).toHaveAttribute('href', '/details/undefined')
   )

   btns.map((btn) => {
      expect(btn).toBeEnabled()
      expect(btn).toHaveTextContent('')
      return null
   })
})

test('fallback button renders with undefined country', () => {
   const { getByText, queryByRole, getAllByRole, getByRole } = render(
      <BorderCountries country={CountryMockTest} />
   )
   const fallbackBtn = getByText(/no bordering countries/i)

   expect(fallbackBtn).toBeDisabled()
   expect(fallbackBtn).toHaveStyle('cursor: not-allowed')

   expect(getByText(/border countries/i)).toBeInTheDocument()
   expect(queryByRole('link')).not.toBeInTheDocument()
   expect(getAllByRole('button')).toHaveLength(1)
})
