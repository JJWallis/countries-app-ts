import React from 'react'
import userEvent from '@testing-library/user-event'
import { filteredRender, render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import FurtherMain from '../routes/FurtherMain'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'

test('renders correctly and semantically', () => {
   const providerProps = {
      filteredRegions: CountryMockTest,
      handleFilterRegions: jest.fn(),
   }
   // const { getByRole } = filteredRender(<FurtherMain />, { providerProps })
   // getByRole('')
})
