import React, { useEffect, useState } from 'react'

export function useDarkMode() {
   const [darkMode, setDarkMode] = useState(() => {})

   useEffect(() => {}, [])

   return [darkMode, setDarkMode]
}
