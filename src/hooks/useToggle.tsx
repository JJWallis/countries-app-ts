import { useState } from 'react'

export const useToggle = (initialState?: boolean) => {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prevValue) => !prevValue)

   return [isToggled, handleChange]
}
