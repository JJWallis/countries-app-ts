import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

jest.mock('axios')

test('countries data API', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )

   window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
         matches: false,
         media: query,
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
      }
   })

   const { getByText, findByText, getByRole } = render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   )

   const loading = getByText(/loading/i)
   expect(await findByText(/loading/i)).not.toBeInTheDocument()

   getByRole('')
})
