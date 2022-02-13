import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import BackButton from '../components/BackButton'

test('back button renders semantically', () => {
   render(<BackButton />)
   const link = screen.getByRole('link')
   const backBtn = screen.getByRole('button')
   const icon = screen.getByTestId('arrow-icon')

   expect(link).toHaveAttribute('href', '/')
   expect(backBtn).toHaveTextContent(/back/i)
   expect(backBtn).toBeEnabled()
   expect(icon).toHaveAttribute('aria-hidden', 'true')
   expect(icon).toHaveAttribute('focusable', 'false')

   screen.getByRole('')
})
