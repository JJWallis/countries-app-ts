import React, { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode'
import { darkTheme, lightTheme } from '../components/styled/Theme'

export const CountriesThemeProvider = ({
   children,
}: {
   children: ReactNode
}) => {
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)
   //   localstorage hook

   return (
      <ThemeProvider theme={{ theme, handleThemeChange }}>
         {children}
      </ThemeProvider>
   )
}
