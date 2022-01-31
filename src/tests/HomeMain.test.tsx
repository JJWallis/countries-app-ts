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

beforeAll(() => {
   render(
      <BrowserRouter>
         <CountriesProvider>
            <FilteredRegionsProvider
               filteredRegions={data}
               handleFilterRegions={(region: string) => {}}
            >
               <HomeMain />
            </FilteredRegionsProvider>
         </CountriesProvider>
      </BrowserRouter>
   )
})

jest.mock('axios')

describe('loading title', () => {
   test('displays on initial render and disappears on successful data fetch', async () => {
      const axiosRequest = axios as jest.Mocked<typeof axios>
      const stories = [
         { population: '1', region: 'Americas' },
         { population: '2', region: 'UK' },
      ]

      axiosRequest.get.mockImplementationOnce(() =>
         Promise.resolve({ data: stories })
      )

      expect(screen.getByRole('heading')).toBeInTheDocument()
   })
})

// describe('App', () => {
//    test('fetches stories from an API and displays them', async () => {
//       const stories = [
//          { objectID: '1', title: 'Hello' },
//          { objectID: '2', title: 'React' },
//       ]

//       axios.get.mockImplementationOnce(() =>
//          Promise.resolve({ data: { hits: stories } })
//       )

//       render(<App />)

//       await userEvent.click(screen.getByRole('button'))

//       const items = await screen.findAllByRole('listitem')

//       expect(items).toHaveLength(2)
//    })
// })
