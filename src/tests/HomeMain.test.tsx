import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import HomeMain from '../routes/HomeMain'
import { render, fireEvent } from '@testing-library/react'
import { CountriesProvider } from '../context/countriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'
import { BrowserRouter } from 'react-router-dom'
import { GetTestById, GetByRole } from '../types/Tests.interface'
let getTestById: GetTestById
let getElByRole: GetByRole

beforeAll(() => {
   render(
      <BrowserRouter>
         <CountriesProvider>
            <FilteredRegionsProvider filteredRegions={} handleFilterRegions={}>
               <HomeMain />
            </FilteredRegionsProvider>
         </CountriesProvider>
      </BrowserRouter>
   )
})

describe('country data', () => {
   test('loading spinner title displays correctly', async () => {})
   test('displays correctly once fetched', async () => {})
})
