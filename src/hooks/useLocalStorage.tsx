import { useState, useEffect } from 'react'

type UseLocalStorage = <T>(
   key: string,
   initialValue: T
) => [T, (value: T) => void]

function getSavedValue<T>(key: string, initialValue: T) {
   const savedValue = localStorage.getItem(key)
   if (savedValue) return JSON.parse(savedValue)
   else if (initialValue instanceof Function) return initialValue()
   else return initialValue
}

export const useLocalStorage: UseLocalStorage = (key, initialValue) => {
   const [value, setValue] = useState(() => getSavedValue(key, initialValue))

   useEffect(
      () => localStorage.setItem(key, JSON.stringify(value)),
      [value, key]
   )

   return [value, setValue]
}
