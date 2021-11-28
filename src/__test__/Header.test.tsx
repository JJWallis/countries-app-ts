import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'
import Filter from '../components/Filter'

test('search input correctly updates when user types', () => {
   const { getByTestId } = render(<Search />)
   const input = getByTestId('search-input')
   expect(input).toHaveValue('')
   expect(input).toBeEnabled()
   fireEvent.change(input, { target: { value: 'test' } })
   expect(input).toHaveValue('test')
})

test('filter initally rendered correctly with valid props', () => {
   const { getByTestId } = render(
      <Filter prevFilter={''} updatePrevFilter={() => 'hi'} />
   )
})
