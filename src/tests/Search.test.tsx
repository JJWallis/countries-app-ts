import React from 'react'
import Search from '../components/Search'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountriesProvider } from '../context/countriesContext'
import { BrowserRouter } from 'react-router-dom'
import { GetTestById } from '../types/Tests.interface'
import { act } from 'react-dom/test-utils'
let getTestById: GetTestById

beforeEach(() => {
   const component = render(
      <CountriesProvider>
         <BrowserRouter>
            <Search />
         </BrowserRouter>
      </CountriesProvider>
   )
   getTestById = component.getByTestId
})

test('input value updates on change', () => {
   const search = getTestById('search-input') as HTMLInputElement
   expect(search.value).toBe('')
   fireEvent.change(search, { target: { value: 'test' } })
   expect(search.value).toBe('test')
})

test('input error styles update on invalid search', () => {
   const search = getTestById('search-input') as HTMLInputElement
   const searchIcon = getTestById('search-icon')
   expect(search.value).toBe('')
   fireEvent.change(search, { target: { value: 'test' } })
   act(() => {
      fireEvent.click(searchIcon)
   })
   expect(search.placeholder).toBe('Please enter a valid country')
})
