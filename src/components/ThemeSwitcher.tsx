import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import { StyledLabel } from './styled/StyledLabel'

const ThemeSwitcher: React.FC = () => {
   const [dark, setDark] = useState(false)
   const { handleThemeChange: themeChange } = { ...useContext(Context) }

   useEffect(() => {
      themeChange && themeChange(dark)
      // add to local-storage
   }, [dark, themeChange])

   // take local-storage checkbox state

   return (
      <>
         <StyledLabel htmlFor="theme">Dark Mode</StyledLabel>
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
