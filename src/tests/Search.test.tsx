import React from 'react'
import Search from '../components/Search'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { GetTestById } from '../types/Tests.interface'
let getTestById: GetTestById

beforeEach(() => {
   const component = render(<Search />)
   getTestById = component.getByTestId
})

test('search input value updates on change', () => {
   const search = getTestById('search-input')
   expect(search.value).toBe('')
})
