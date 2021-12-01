// import { useState, useEffect } from 'react'

// function getSavedValue(key, initialValue) {
//    const savedValue = JSON.parse(localStorage.getItem(key))
//    if (savedValue) {
//       return savedValue
//    }

//    if (initialValue instanceof Function) return initialValue()
//    return initialValue
// }

// export default function useLocalStorage(key, initialValue) {
//    const [value, setValue] = useState(() => {
//       return getSavedValue(key, initialValue)
//    })

//    useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value))
//    }, [value, key])

//    return [value, setValue]
// }

// // const [name, setName] = useLocalStorage('name','')
// // saving localStorage value with name key + empty inital value (passed into state)
// // useState - also takes a function as input ()
// // instanceof Function - checks if a function
// // must account for this so our custom hook works exactly like useState
// // only runs once to get the saved value - JSON methods are quite slow (not desired every render)
