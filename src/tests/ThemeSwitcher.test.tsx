import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import ThemeSwitcher from '../components/ThemeSwitcher'
import userEvent from '@testing-library/user-event'

test('handleThemeChange callback executed', () => {
   const themeChange = jest.fn()
   const { getByRole } = render(
      <ThemeSwitcher handleThemeChange={themeChange} />
   )
   const checkbox = getByRole('checkbox')

   userEvent.click(checkbox)
   expect(checkbox).toBeChecked()
   expect(themeChange).toHaveBeenCalledTimes(2)
})
