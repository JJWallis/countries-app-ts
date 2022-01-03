import { useState } from 'react'

export const useToggle = (initialState?: boolean): [boolean, () => void] => {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prevValue) => !prevValue)

   return [isToggled, handleChange]
}
