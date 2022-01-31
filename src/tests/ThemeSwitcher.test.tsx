import React from 'react'
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import ThemeSwitcher from '../components/ThemeSwitcher'
import userEvent from '@testing-library/user-event'

test('handleThemeChange callback executed', () => {
   const themeChange = jest.fn()
   render(<ThemeSwitcher handleThemeChange={themeChange} />)
   const checkbox = screen.getByRole('checkbox')
   userEvent.click(checkbox)
   expect(checkbox).toBeChecked()
   expect(themeChange).toHaveBeenCalledTimes(2)
})
