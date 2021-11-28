import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'

test('Search input correctly updates when user types', () => {
   const { getByTestId } = render(<Search />)
   const input = getByTestId('search-input')
   expect(input).toHaveValue('')
   fireEvent.change(input, { target: { value: 'test' } })
   expect(input).toHaveValue('test')
})
