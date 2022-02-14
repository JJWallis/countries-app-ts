import React from 'react'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'

test('is rendered correctly', () => {
   const { getByRole } = render(<Search />)
   const search = getByRole('textbox')

   expect(search).toBeTruthy()
})

test('input value updates on change', () => {
   const { getByTestId } = render(<Search />)
   const search = getByTestId('search-input') as HTMLInputElement

   expect(search.value).toBe('')
   userEvent.type(search, 'test')
   expect(screen.getByRole('textbox')).toHaveValue('test')
})

test('input error styles update on invalid search', () => {
   const { getByTestId } = render(<Search />)
   const search = getByTestId('search-input') as HTMLInputElement
   const searchIcon = getByTestId('search-icon')

   expect(search.value).toBe('')
   userEvent.type(search, 'test')
   userEvent.click(searchIcon)
   expect(search.placeholder).toBe('Please enter a valid country')
})
