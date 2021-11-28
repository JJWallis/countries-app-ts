import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

test('App error state contains correct default value', () => {
   const { getByTestId } = render(<App />)
})
