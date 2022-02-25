import React from 'react'
import { render } from './test-utils'
import CountryCard from '../components/CountryCard'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const { getByRole, getByTestId, getAllByTestId } = render(
      <CountryCard data={CountryMockTest[0]} />
   )
   const heading = getByRole('heading')
   const link = getByRole('link')
   const flagCt = getByTestId('country-card-image')
   const subTitles = getAllByTestId('country-card-subtitle').map(
      (el) => el.textContent
   )
   const descs = getAllByTestId('country-card-desc').map(
      (desc) => desc.textContent
   )

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent(/france/i)

   expect(link).toBeInTheDocument()
   expect(link).toHaveAttribute('href', '/details/france')

   expect(flagCt).toHaveAccessibleName(/flag of france/i)

   expect(subTitles).toEqual(['Population:', 'Region:', 'Capital:'])
   expect(descs).toEqual(['67391582', 'Europe', 'Paris'])
})
