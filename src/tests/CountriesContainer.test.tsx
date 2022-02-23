import React from 'react'
import { countriesRender } from './test-utils'
import CountriesContainer from '../components/CountriesContainer'
import axios from 'axios'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios')

test('initial test', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockResolvedValue(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const providerProps = {
      countries: null,
      countriesError: false,
   }

   const { findByRole } = countriesRender(<CountriesContainer />, {
      providerProps,
   })

   await findByRole('')
})
