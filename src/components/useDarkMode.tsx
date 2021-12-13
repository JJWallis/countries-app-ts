import React, { useEffect, useState } from 'react'

const matchDark = '(prefers-color-scheme: dark)'

export function useDarkMode() {
   const [darkMode, setDarkMode] = useState(
      () => window.matchMedia && window.matchMedia(matchDark).matches
   )

   useEffect(() => {}, [])

   return [darkMode, setDarkMode]
}
