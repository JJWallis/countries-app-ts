import React from 'react'
import { countriesRender } from './test-utils'
import userEvent from '@testing-library/user-event'
import SearchFilter from '../components/SearchFilter'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'

test('HTML renders correctly and semantically', () => {
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const { getByRole } = countriesRender(<SearchFilter />, { providerProps })

   getByRole('')
})
