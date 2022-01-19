import React from 'react'
import Header from '../components/Header'
import { darkTheme, lightTheme } from '../components/styled/Theme'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('header title renders with correct text', () => {
   const { getByTestId } = render(
      <Header
         handleThemeChange={(dark: boolean) =>
            dark ? setTheme(darkTheme) : setTheme(lightTheme)
         }
      />
   )
   const title = getByTestId('header-title')
   expect(title).toHaveTextContent('Where in the world?')
})
