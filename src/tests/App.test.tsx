import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { routerRender } from './test-utils'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'

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
})

test('renders correctly pre-successful request', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )

   const {
      getByText,
      findByText,
      getByRole,
      findByRole,
      getAllByRole,
      findAllByRole,
   } = routerRender(<App />)

   expect(getByText(/loading/i)).toBeInTheDocument()
   expect(getByRole('banner')).toBeInTheDocument()
   expect(getByRole('main')).toBeInTheDocument()
   expect(
      getAllByRole('heading').map(({ textContent }) => textContent)
   ).toEqual(['Where in the world?', 'Loading...'])

   // successsful response
   expect(await findByText(/loading/i)).not.toBeInTheDocument()

   const countries = await findByRole('article')
   expect(countries).toBeInTheDocument()
   expect(countries).toContainHTML('section')

   const newHeadings = await findAllByRole('heading')
   expect(newHeadings.map(({ textContent }) => textContent)).toEqual([
      'Where in the world?',
      'hi',
   ])
   getByRole('')
})
