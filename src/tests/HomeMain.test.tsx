import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import HomeMain from '../routes/HomeMain'
import { render, screen } from '@testing-library/react'
import { CountriesProvider } from '../context/countriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'
import { BrowserRouter } from 'react-router-dom'
import { CountryData } from '../types/countriesContext.interface'
let data: CountryData

// beforeAll(() => {
//    render(
//       <BrowserRouter>
//          <CountriesProvider>
//             <FilteredRegionsProvider
//                filteredRegions={data}
//                handleFilterRegions={(region: string) => {}}
//             >
//                <HomeMain />
//             </FilteredRegionsProvider>
//          </CountriesProvider>
//       </BrowserRouter>
//    )
// })

jest.mock('axios')

describe('loading title', () => {
   test('displays on initial render and disappears on successful data fetch', async () => {
      const axiosRequest = axios as jest.Mocked<typeof axios>
      const stories = [
         {
            name: { common: 'hi', nativeName: [{ official: 'hi' }] },
            cioc: 'hi',
            cca3: 'hi',
            region: 'hi',
            borders: ['hi'],
            flags: {
               svg: 'hi',
            },
            currencies: [{ name: 'hi' }],
            languages: ['hi'],
            population: 10,
            subregion: 'hi',
            capital: 'hi',
            tld: ['hi'],
         },
      ]

      axiosRequest.get.mockImplementationOnce(() =>
         Promise.resolve({ data: stories })
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
      // expect(items).toHaveLength(250) - country cards
   })
})
