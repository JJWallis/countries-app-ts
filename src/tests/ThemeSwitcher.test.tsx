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
   expect(checkbox).toBeEnabled()

   expect(icon).toHaveAttribute('aria-hidden', 'true')
   expect(label).toHaveAttribute('aria-label', 'Theme toggle switch')
   expect(label).toHaveAttribute('for', 'theme')
   expect(checkbox).toHaveAttribute('id', 'theme')
})

test('on theme change checkbox is toggled and handleThemeChange called', () => {
   const themeChange = jest.fn()
   const { getByRole, getByText } = render(
      <ThemeSwitcher handleThemeChange={themeChange} />
   )
   const checkbox = getByRole('checkbox')
   const label = getByText(/dark mode/i)

   expect(themeChange).toHaveBeenCalled()

   userEvent.click(checkbox)

   expect(checkbox).toBeChecked()
   expect(themeChange).toHaveBeenCalled()

   userEvent.click(label)

   expect(checkbox).not.toBeChecked()
   expect(themeChange).toHaveBeenCalled()
})
