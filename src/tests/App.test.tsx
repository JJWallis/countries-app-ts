import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { routerRender } from './test-utils'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

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
})

test('error title displays on unsuccessful request', async () => {
   const consoleMock = jest.spyOn(console, 'error').mockImplementation()
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() => Promise.reject(new Error('')))
   const { getByText, findByText, getByRole, findByRole } = routerRender(
      <App />
   )
   const input = getByRole('textbox')

   expect(getByText(/loading/i)).toBeInTheDocument()
   expect(input).toBeEnabled()

   // unsuccesssful response

   expect(
      await findByText(
         /country data could not be retrieved. Please reload & try again/i
      )
   ).toBeInTheDocument()
   expect(await findByRole('textbox')).toBeDisabled()
   expect(await findByText(/filter by region/i)).toBeDisabled()
   expect(consoleMock).toHaveBeenCalled()
})

test('navigation to and from details page functions correctly', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const { getByRole, findByRole, queryByRole, getByText } = routerRender(
      <App />
   )

   expect(queryByRole('link')).toBeNull()
   const country = await findByRole('link')
   expect(country).toBeInTheDocument()

   // navigate to details page
   userEvent.click(country)

   getByRole('')

   // back to home page
   userEvent.click(getByText(/back/i))
})
