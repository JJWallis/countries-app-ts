import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import BackButton from '../components/BackButton'

test('HTML renders correctly & semantically', () => {
   const { getByRole, getByTestId } = render(<BackButton />)
   const link = getByRole('link')
   const backBtn = getByRole('button')
   const icon = getByTestId('arrow-icon')

   expect(link).toBeInTheDocument()
   expect(backBtn).toBeInTheDocument()
   expect(icon).toBeInTheDocument()

   expect(link).toHaveAttribute('href', '/')
   expect(backBtn).toHaveTextContent(/back/i)
   expect(backBtn).toBeEnabled()

   expect(icon).toHaveAttribute('aria-hidden', 'true')

   getByRole('')
})
