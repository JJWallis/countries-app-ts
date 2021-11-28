import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'

let getByTestId: HTMLElement

beforeEach(() => {
   const model = render(<Search />)
   getByTestId = model.getByTestId('search-input')
})

test('Search input correctly updates when user types', () => {
   const input = getByTestId
   expect(input).toHaveValue('')
   expect(input).toBeEnabled()
   fireEvent.change(input, { target: { value: 'test' } })
   expect(input).toHaveValue('test')
})
