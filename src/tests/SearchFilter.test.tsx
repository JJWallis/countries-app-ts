import React from 'react'
import { filteredRender } from './test-utils'
import userEvent from '@testing-library/user-event'
import SearchFilter from '../components/SearchFilter'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'

test('search input persists when region button clicked', () => {
   const providerProps = {
      filteredRegions: CountryMockTest,
      handleFilterRegions: jest.fn(),
   }
   const { getByRole } = filteredRender(<SearchFilter />, { providerProps })
   const input = getByRole('textbox') as HTMLInputElement
   const regionBtn = getByRole('button', { name: /europe/i })

   userEvent.type(input, 'europe')
   userEvent.click(regionBtn)

   expect(input.value).toBe('europe')
})
