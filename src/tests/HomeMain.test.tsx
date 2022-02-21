import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import axios from 'axios'
import HomeMain from '../routes/HomeMain'

jest.mock('axios')

describe('loading title', () => {
   test('displays on initial render and disappears on successful data fetch', async () => {
      const axiosRequest = axios as jest.Mocked<typeof axios>
      const data = Promise.resolve({ data: CountryMockTest })
      axiosRequest.get.mockResolvedValue(data)

      const { getByRole, findAllByRole, queryByText, findByRole, debug } =
         render(<HomeMain />)
      debug()

      // expect(queryByText('Loading...')).toBeNull()
      // expect(await findByRole('link')).toHaveAttribute('href')
   })

   // test('displays error message on unsuccessful data fetch', async () => {
   //    const axiosReq = axios as jest.Mocked<typeof axios>
   //    axiosReq.get.mockImplementationOnce(() => Promise.reject(new Error()))
   //    render(<HomeMain />)
   //    // screen.debug()
   //    // expect(screen.getByText('Loading...')).toBeInTheDocument()
   //    // expect(await screen.findByRole('heading')).toHaveTextContent(
   //    //    'Country data could not be retrieved. Please reload & try again.'
   //    // )
   // })
})

// test() - if user clicks on card with 'hi' - fallbacks shown as no 'hi' country
