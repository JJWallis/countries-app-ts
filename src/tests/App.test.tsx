import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

// jest.mock('axios')
// const axiosRequest = axios as jest.Mocked<typeof axios>
// const data = Promise.resolve({ data: CountryMockTest })
// axiosRequest.get.mockResolvedValue(data)

test('countries data API', async () => {
   window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
         matches: false,
         media: query,
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
      }
   })

   const { getByRole } = render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   )

   getByRole('')
})
