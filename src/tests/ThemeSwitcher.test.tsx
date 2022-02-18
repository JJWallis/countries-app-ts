import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import ThemeSwitcher from '../components/ThemeSwitcher'
import userEvent from '@testing-library/user-event'

test('HTML renders correctly & semantically', () => {
   const themeChange = jest.fn()
   const { getByRole, getByText, getByTestId } = render(
      <ThemeSwitcher handleThemeChange={themeChange} />
   )
   const checkbox = getByRole('checkbox')
   const label = getByText(/dark mode/i)
   const icon = getByTestId('moon-icon')

   expect(label).toBeInTheDocument()
   expect(icon).toBeInTheDocument()
   expect(checkbox).toBeInTheDocument()
   expect(icon).toHaveAttribute('aria-hidden', 'true')

   getByRole('')
})

test('handleThemeChange callback executed on theme change', () => {
   const themeChange = jest.fn()
   const { getByRole } = render(
      <ThemeSwitcher handleThemeChange={themeChange} />
   )
   const checkbox = getByRole('checkbox')

   userEvent.click(checkbox)
   expect(checkbox).toBeChecked()
   expect(themeChange).toHaveBeenCalledTimes(2)
})
