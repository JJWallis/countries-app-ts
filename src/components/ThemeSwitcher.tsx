import React, { useContext } from 'react'
import { Context } from '../App'
import StyledInput from './styled/StyledInput'
import { StyledLabel } from './styled/StyledLabel'

const ThemeSwitcher: React.FC = () => {
   const context = useContext(Context)

   return (
      <>
         <StyledLabel htmlFor="theme">Dark Mode</StyledLabel>
         <StyledInput type="checkbox" id="theme" checkbox></StyledInput>
      </>
   )
}

export default ThemeSwitcher
