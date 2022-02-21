import React from 'react'
import { countriesRender } from './test-utils'
import userEvent from '@testing-library/user-event'
import Filter from '../components/Filter'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'

test('HTML renders correctly & semantically', () => {
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const prevFilter = jest.fn()
   const { getByRole, getAllByRole, getByTestId } = countriesRender(
      <FilteredRegionsProvider
         filteredRegions={CountryMockTest}
         handleFilterRegions={prevFilter}
      >
         <Filter prevFilter="" updatePrevFilter={prevFilter} />
      </FilteredRegionsProvider>,
      { providerProps }
   )

   const btnTitle = getByRole('button', { name: /Filter by region/i })
   const btnOption = getByRole('button', { name: /hi/i })
   const btns = getAllByRole('button')
   const dropDownCt = getByTestId('drop-down-ct')

   expect(btns).toHaveLength(2)
   expect(btns.map((button) => button.getAttribute('aria-controls'))).toEqual([
      'country-information',
      'country-information',
   ])
   expect(btns.map((button) => button.getAttribute('disabled'))).toEqual([
      null,
      null,
   ])

   expect(dropDownCt).toBeInTheDocument()
   expect(btnTitle).toBeInTheDocument()
   expect(btnOption).toBeInTheDocument()
   expect(btnOption).toHaveAttribute('aria-selected', 'false')
})

test('drop down renders disabled and empty on request error', () => {})

test('drop down menu toggles correctly on button click', () => {
   const prevFilter = jest.fn()
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const { getByRole, getByTestId } = countriesRender(
      <FilteredRegionsProvider
         filteredRegions={CountryMockTest}
         handleFilterRegions={prevFilter}
      >
         <Filter prevFilter="" updatePrevFilter={prevFilter} />
      </FilteredRegionsProvider>,
      { providerProps }
   )

   const btnTitle = getByRole('button', { name: /Filter by region/i })
   const btnOption = getByRole('button', { name: /hi/i })
   const dropDownCt = getByTestId('drop-down-ct')

   expect(dropDownCt).toHaveStyle('opacity: 0')

   userEvent.click(btnTitle)
   expect(dropDownCt).toHaveStyle('opacity: 1')

   userEvent.click(btnOption)
   expect(dropDownCt).toHaveStyle('opacity: 0')
})

test('drop down menu is disabled on invalid network request', () => {
   const prevFilter = jest.fn()
   const providerProps = {
      countries: null,
      countriesError: true,
   }
   const { getByRole, getByTestId } = countriesRender(
      <FilteredRegionsProvider
         filteredRegions={CountryMockTest}
         handleFilterRegions={prevFilter}
      >
         <Filter prevFilter="" updatePrevFilter={prevFilter} />
      </FilteredRegionsProvider>,
      { providerProps }
   )
   const btn = getByRole('button', { name: /Filter by region/i })
   const dropDownCt = getByTestId('drop-down-ct')

   expect(btn).toHaveAttribute('disabled')
   expect(dropDownCt).toHaveStyle('opacity: 0')

   userEvent.click(btn)

   expect(dropDownCt).toHaveStyle('opacity: 0')
})
