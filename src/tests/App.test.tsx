import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

jest.mock('axios')

beforeEach(() => {
   window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
         matches: false,
         media: query,
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
      }
   })

   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
})

test('countries data API', async () => {
   const { getByText, findByText, getByRole } = render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   )

   expect(getByText(/loading/i)).toBeInTheDocument()
   getByRole('')

   //    successsful response
   expect(await findByText(/loading/i)).not.toBeInTheDocument()
})
