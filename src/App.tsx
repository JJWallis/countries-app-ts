import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './components/styled/Theme'
import GlobalStyles from './components/styled/GlobalStyles'
import Header from './components/Header'
import Main from './components/Main'

const App: React.FC = () => {
   const prefersDarkMode = useDarkMode()
   const [theme, setTheme] = useState(() =>
      prefersDarkMode ? darkTheme : lightTheme
   )

   const handleThemeChange = (dark: boolean) =>
      dark ? setTheme(darkTheme) : setTheme(lightTheme)

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Header handleThemeChange={handleThemeChange} />
         <Main />
      </ThemeProvider>
   )
}

export default App
