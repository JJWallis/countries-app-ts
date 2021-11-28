import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../components/Header'

test('Header title contains correct text', () => {
   const { getByTestId } = render(<Header />)
   const title = getByTestId('title')
   expect(title).toHaveTextContent('Where in the world?')
})
