import Search from '../components/Search'
import React, { Component } from 'react'
import { render, fireEvent, screen, getByRole } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CountriesProvider } from '../context/countriesContext'
import { BrowserRouter } from 'react-router-dom'
import { GetTestById } from '../types/Tests.interface'
let getTestById: GetTestById
let getElByRole: any

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

test('input value updates on change', () => {
   const search = getTestById('search-input') as HTMLInputElement
   expect(search.value).toBe('')
   fireEvent.change(search, { target: { value: 'test' } })
   expect(search.value).toBe('test')
   // screen.getByRole('')
})

describe('search', () => {
   test('is rendered correctly', () => {
      const search = getElByRole('textbox')
      expect(search).toBeTruthy()
   })
})

test('input error styles update on invalid search', () => {
   const search = getTestById('search-input') as HTMLInputElement
   const searchIcon = getTestById('search-icon')
   expect(search.value).toBe('')
   fireEvent.change(search, { target: { value: 'test' } })
   fireEvent.click(searchIcon)
   expect(search.placeholder).toBe('Please enter a valid country')
})
