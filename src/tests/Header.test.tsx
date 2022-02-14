import React from 'react'
import Header from '../components/Header'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

test('header title renders with correct text', () => {
   const { getByTestId } = render(<Header />)
   const title = getByTestId('header-title')

   expect(title).toHaveTextContent('Where in the world?')
})
