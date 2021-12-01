import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { data } from '../../App'

export default function useFetch(
   endpoint: string,
   setError: (value: React.SetStateAction<boolean>) => void
) {
   const [data, setData] = useState<data>(null)
   const fetchError = useRef(false)

   useEffect(() => {
      axios
         .get<data>(endpoint)
         .then((value) => setData(value.data))
         .catch((err) => {
            fetchError.current = true
            setError(true) // wont know what state to update
            console.error(err.message)
         })
   }, [endpoint, setError])

   //    only run on mount - no every other re-render?

   return [data, fetchError]
}

// const [data, fetchError] = useFetch(
//    'https://restcountries.com/v3.1/al',
//    setError
// )