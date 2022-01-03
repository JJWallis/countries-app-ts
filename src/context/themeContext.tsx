import React, { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode'
import { darkTheme, lightTheme, baseTheme } from '../components/styled/Theme'

export const CountriesThemeProvider = ({
   children,
}: {
   children: ReactNode
}) => {
   const prefersDarkMode = useDarkMode()
   const [dynamicTheme, setdynamicTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )

   const handleThemeChange = (dark: boolean) =>
      dark ? setdynamicTheme(darkTheme) : setdynamicTheme(lightTheme)
   //   localstorage hook

   return (
      <ThemeProvider theme={{ baseTheme, dynamicTheme, handleThemeChange }}>
         {children}
      </ThemeProvider>
   )
}
