import React from 'react'
import { countriesRender } from './test-utils'
import CountriesContainer from '../components/CountriesContainer'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'

jest.mock('axios')

test('initial test', async () => {
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const { getByRole } = countriesRender(<CountriesContainer />, {
      providerProps,
   })

   getByRole('')
})
