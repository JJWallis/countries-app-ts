import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import HomeMain from '../routes/HomeMain'
import { render, screen } from '@testing-library/react'
import { CountriesProvider } from '../context/countriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'
import { BrowserRouter } from 'react-router-dom'
import {
   CountryData,
   CountryMockTest,
} from '../types/countriesContext.interface'
let data: CountryData

jest.mock('axios')

describe('loading title', () => {
   test('displays on initial render and disappears on successful data fetch', async () => {
      const axiosRequest = axios as jest.Mocked<typeof axios>
      axiosRequest.get.mockImplementationOnce(() =>
         Promise.resolve({ data: CountryMockTest })
      )

      render(
         <BrowserRouter>
            <CountriesProvider>
               <FilteredRegionsProvider
                  filteredRegions={data}
                  handleFilterRegions={(region: string) => undefined}
               >
                  <HomeMain />
               </FilteredRegionsProvider>
            </CountriesProvider>
         </BrowserRouter>
      )

      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(await screen.findByRole('heading')).not.toBeInTheDocument()
      expect(await screen.findAllByRole('link')).toHaveLength(1)
   })

   test('displays error on unsuccessful data fetch', async () => {
      const axiosReq = axios as jest.Mocked<typeof axios>
      axiosReq.get.mockImplementationOnce(() => Promise.reject(new Error()))

      render(
         <BrowserRouter>
            <CountriesProvider>
               <FilteredRegionsProvider
                  filteredRegions={data}
                  handleFilterRegions={(region: string) => undefined}
               >
                  <HomeMain />
               </FilteredRegionsProvider>
            </CountriesProvider>
         </BrowserRouter>
      )

      expect(screen.getByRole('heading')).toBeInTheDocument()
      expect(await screen.findByRole('heading')).toHaveTextContent(
         'Country data could not be retrieved. Please reload & try again.'
      )
   })
})

// test() - if user clicks on card with 'hi' - fallbacks shown as no 'hi' country
