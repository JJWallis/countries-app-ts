import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'

test('Search input contains correct empty default value', () => {
   const { getByTestId } = render(<Search />)
   const searchInput = getByTestId('search-input')
   expect(searchInput).toHaveValue('')
})

test('Search input correctly updates when user types', () => {
   const { getByTestId } = render(<Search />)
   const input = getByTestId('search-input')
})
