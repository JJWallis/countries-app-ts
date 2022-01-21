import React from 'react'
import '@testing-library/jest-dom/extend-expect'
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

test('loading title is rendered', () => {
   expect(screen.getByText('Loading...')).toBeInTheDocument()
})

// test('loading title displays on initial render', async () => {
//    expect(screen.getByRole('heading')).toBeTruthy()
//    screen.debug()
//    expect(await screen.findByRole('heading')).toBeNull()
// })

// FilteredRegions data - nothing there
