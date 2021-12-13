import { useEffect, useState } from 'react'

const matchDark = '(prefers-color-scheme: dark)'

export function useDarkMode() {
   const [darkMode, setDarkMode] = useState(
      () => window.matchMedia && window.matchMedia(matchDark).matches
   )

   useEffect(() => {
      const matcher = window.matchMedia(matchDark)
      const onChange = ({ matches }: { matches: boolean }) =>
         setDarkMode(matches)
      matcher.addEventListener('change', onChange)
      return () => matcher.removeEventListener('change', onChange)
   }, [setDarkMode])

   return [darkMode, setDarkMode]
}

// matchMedia() method returns a new MediaQueryList object that can then be used to determine
// if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.
// onChange listener = Adds to the MediaQueryList a callback which is invoked whenever the media query status
