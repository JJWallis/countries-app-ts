import Search from '../components/Search'
import React from 'react'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { GetByRole, GetTestById } from '../types/Tests.interface'
let getTestById: GetTestById
let getElByRole: GetByRole

beforeEach(() => {
   const component = render(<Search />)
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
   userEvent.type(search, 'test')
   userEvent.click(searchIcon)
   expect(search.placeholder).toBe('Please enter a valid country')
})
