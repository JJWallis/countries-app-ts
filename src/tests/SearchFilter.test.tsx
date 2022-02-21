import React from 'react'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'
import SearchFilter from '../components/SearchFilter'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly and semantically', () => {
   render(<SearchFilter />)
   //    getByRole('')
})
