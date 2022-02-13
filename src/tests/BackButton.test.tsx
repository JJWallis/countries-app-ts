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
   expect(link).toHaveAttribute('href', '/')
   screen.getByRole('')
})
