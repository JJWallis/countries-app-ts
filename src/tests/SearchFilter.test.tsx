import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import SearchFilter from '../components/SearchFilter'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly and semantically', () => {
   const { getByRole } = render(<SearchFilter />)
   getByRole('')
})
