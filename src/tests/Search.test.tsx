import React from 'react'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'
import Search from '../components/Search'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'

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

test('input value updates on change & search icon becomes clickable', () => {
   const { getByRole, getByTestId } = render(<Search />)
   const search = getByRole('textbox') as HTMLInputElement
   const searchIcon = getByTestId('search-icon')

   expect(search.value).toBe('')
   expect(searchIcon).toHaveAttribute('disabled', '')

   userEvent.type(search, 'test')
   expect(search).toHaveValue('test')
   expect(searchIcon).not.toHaveAttribute('disabled')

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
   expect(search.value).toBe('')
   expect(searchIcon).toHaveAttribute('disabled', '')

   userEvent.type(search, 'test')
   fireEvent.keyDown(search, { key: 'Enter', code: 13 })

   expect(search.placeholder).toBe('Please enter a valid country')
   expect(search.value).toBe('')
   expect(searchIcon).toHaveAttribute('disabled', '')

   // getByRole('')
})
