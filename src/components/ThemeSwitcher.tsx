import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import { StyledLabel } from './styled/StyledLabel'

const ThemeSwitcher: React.FC = () => {
   const [dark, setDark] = useState(false)
   const context = useContext(Context)

   useEffect(() => {
      context?.handleThemeChange(dark)
      // add to local-storage
   }, [dark, context])

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
