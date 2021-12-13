import React, { useEffect, useState } from 'react'

const matchDark = '(prefers-color-scheme: dark)'

export function useDarkMode() {
   const [darkMode, setDarkMode] = useState(
      () => window.matchMedia && window.matchMedia(matchDark).matches
   )

   useEffect(() => {
      const matcher = window.matchMedia(matchDark)
      const onChange = ({ matches }: { matches: boolean }) =>
         setDarkMode(matches)
      matcher.addListener(onChange)
      return () => matcher.removeListener(onChange)
   }, [setDarkMode])

   return [darkMode, setDarkMode]
}
