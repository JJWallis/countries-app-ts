import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import BackButton from '../components/BackButton'

test('back button renders semantically', () => {
   const { getByRole, getByTestId } = render(<BackButton />)
   const link = getByRole('link')
   const backBtn = getByRole('button')
   const icon = getByTestId('arrow-icon')

   expect(link).toHaveAttribute('href', '/')

   expect(backBtn).toHaveTextContent(/back/i)
   expect(backBtn).toBeEnabled()

   expect(icon).toHaveAttribute('aria-hidden', 'true')
   expect(icon).toHaveAttribute('focusable', 'false')

   // screen.getByRole('')
})
