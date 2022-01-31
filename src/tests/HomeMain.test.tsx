import React from 'react'
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import axios from 'axios'
import HomeMain from '../routes/HomeMain'

jest.mock('axios')

describe('loading title', () => {
   test('displays on initial render and disappears on successful data fetch', async () => {
      const axiosRequest = axios as jest.Mocked<typeof axios>
      axiosRequest.get.mockImplementationOnce(() =>
         Promise.resolve({ data: CountryMockTest })
      )
      render(<HomeMain />)
      expect(screen.getByText('Loading...')).toBeInTheDocument()
      expect(await screen.findByText('Loading...')).not.toBeInTheDocument()
      // expect(await screen.findByRole('link')).getAttribute('href').toBe(...)
      expect(await screen.findAllByRole('link')).toHaveLength(1)
   })

   test('displays error on unsuccessful data fetch', async () => {
      const axiosReq = axios as jest.Mocked<typeof axios>
      axiosReq.get.mockImplementationOnce(() => Promise.reject(new Error()))

      render(<HomeMain />)

      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(await screen.findByRole('heading')).toHaveTextContent(
         'Country data could not be retrieved. Please reload & try again.'
      )
   })
})

// test() - if user clicks on card with 'hi' - fallbacks shown as no 'hi' country
