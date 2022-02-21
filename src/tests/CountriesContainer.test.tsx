import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import CountriesContainer from '../components/CountriesContainer'
import '@testing-library/jest-dom/extend-expect'

test('initial test', () => {
   const { getByRole } = render(<CountriesContainer />)
})
