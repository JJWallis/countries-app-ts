import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import { StyledLabel } from './styled/StyledLabel'
import Icon from './styled/Icon'

const ThemeSwitcher: React.FC = () => {
   const [dark, setDark] = useState(false)
   const { handleThemeChange: themeChange } = { ...useContext(Context) }

   useEffect(() => {
      const theme = localStorage.getItem('dark')
      theme && setDark(JSON.parse(theme))
   }, [])

   useEffect(() => {
      themeChange && themeChange(dark)
      localStorage.setItem('dark', JSON.stringify(dark))
   }, [dark, themeChange])

   return (
      <>
         <StyledLabel htmlFor="theme" aria-label="Theme toggle switch.">
            Dark Mode
         </StyledLabel>
         <Icon moon />
         <StyledInput
            checkbox
            type="checkbox"
            id="theme"
            checked={dark}
            onChange={(e) => setDark(e.currentTarget.checked)}
         />
      </>
   )
}

export default ThemeSwitcher
