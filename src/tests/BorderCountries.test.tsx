import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from './test-utils'
import { Link } from 'react-router-dom'
import BorderCountries from '../components/BorderCountries'
import { CountryMockTest } from '../types/countriesContext.interface'
import '@testing-library/jest-dom/extend-expect'

test('button renders correctly', () => {
   render(<BorderCountries country={CountryMockTest[0]} />)
   screen.getByRole('')
})

// test('fallback button renders with undefined data', () => {
//    render(<BorderCountries country={CountryMockTest} />)
//    screen.getByRole('')
// })
