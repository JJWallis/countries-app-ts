import React from 'react'
import Header from '../components/Header'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

test('header title renders with correct text', () => {
   const { getByRole } = render(<Header />)
   const header = getByRole('banner')
   const title = getByRole('heading')

   expect(header).toBeInTheDocument()
   expect(title).toBeInTheDocument()
   expect(title).toHaveTextContent(/where in the world/i)

   getByRole('')
})
