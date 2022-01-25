import Search from '../components/Search'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { CountriesProvider } from '../context/countriesContext'
import { BrowserRouter } from 'react-router-dom'
import { GetByRole, GetTestById } from '../types/Tests.interface'
let getTestById: GetTestById
let getElByRole: GetByRole

beforeEach(() => {
   const component = render(
      <CountriesProvider>
         <BrowserRouter>
            <Search />
         </BrowserRouter>
      </CountriesProvider>
   )
   getTestById = component.getByTestId
   getElByRole = component.getByRole
})

test('is rendered correctly', () => {
   const search = getElByRole('textbox')
   expect(search).toBeTruthy()
})

test('input value updates on change', () => {
   const search = getTestById('search-input') as HTMLInputElement
   expect(search.value).toBe('')
   userEvent.type(search, 'test')
   expect(screen.getByRole('textbox')).toHaveValue('test')
})

test('input error styles update on invalid search', () => {
   const search = getTestById('search-input') as HTMLInputElement
   const searchIcon = getTestById('search-icon')
   expect(search.value).toBe('')
   fireEvent.change(search, { target: { value: 'test' } })
   fireEvent.click(searchIcon)
   expect(search.placeholder).toBe('Please enter a valid country')
})
