import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { routerRender } from './test-utils'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

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

   act(() => {
      axiosRequest.get.mockImplementationOnce(() =>
         Promise.resolve({ data: CountryMockTest })
      )
   })
})

test('countries data API', async () => {
   const { getByText, findByText, getByRole } = routerRender(<App />)

   expect(getByText(/loading/i)).toBeInTheDocument()
   getByRole('')

   // successsful response
   expect(await findByText(/loading/i)).not.toBeInTheDocument()
})
