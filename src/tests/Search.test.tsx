import React from 'react'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'
import Search from '../components/Search'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const { getByRole, getByTestId } = render(<Search />)
   const search = getByRole('textbox')
   const searchIcon = getByTestId('search-icon')

   expect(search).toBeInTheDocument()
   expect(search).toHaveFocus()
   expect(searchIcon).toBeInTheDocument()
   expect(searchIcon).toHaveAttribute(
      'aria-label',
      'Search for inputted country'
   )
})

test('input value updates on change', () => {
   const { getByRole } = render(<Search />)
   const search = getByRole('textbox') as HTMLInputElement

   expect(search.value).toBe('')
   userEvent.type(search, 'test')
   expect(search).toHaveValue('test')

   userEvent.type(search, 'test')
   expect(search).toHaveValue('testtest')
})

test('input error styles update on invalid search', () => {
   const { getByTestId, getByRole } = render(<Search />)
   const search = getByRole('textbox') as HTMLInputElement
   const searchIcon = getByTestId('search-icon')

   expect(search.value).toBe('')
   userEvent.type(search, 'test')
   userEvent.click(searchIcon)
   expect(search.placeholder).toBe('Please enter a valid country')
})
