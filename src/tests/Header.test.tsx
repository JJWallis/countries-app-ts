import React from 'react'
import Header from '../components/Header'
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
   render(<Header handleThemeChange={(dark: boolean) => undefined} />)
})

test('header title renders with correct text', () => {
   const title = screen.getByTestId('header-title')
   expect(title).toHaveTextContent('Where in the world?')
})
