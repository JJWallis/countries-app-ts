import React from 'react'
import { render } from './test-utils'
import CountryCard from '../components/CountryCard'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const { getByRole } = render(<CountryCard data={CountryMockTest[0]} />)
   const heading = getByRole('heading')
   const link = getByRole('link')

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent('hi')

   expect(link).toBeInTheDocument()
   expect(link).toHaveAttribute('href', '/details/hi')

   getByRole('')
})
