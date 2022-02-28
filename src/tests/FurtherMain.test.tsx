import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import FurtherMain from '../routes/FurtherMain'
import '@testing-library/jest-dom/extend-expect'

test('renders correctly and semantically', () => {
   const { getByRole } = render(<FurtherMain />)
   getByRole('')
})
