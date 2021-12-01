import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { data } from '../../App'

export default async function useFetch(
   endpoint: string,
   setError: (value: React.SetStateAction<boolean>) => void
) {
   const [data, setData] = useState<data>(null)
   const fetchError = useRef(false)

   function fetchData(endpoint: string) {
      axios
         .get<data>(endpoint)
         .then((value) => setData(value.data))
         .catch((err) => {
            fetchError.current = true
            setError(true)
            console.error(err.message)
         })
   }

   //    useEffect(() => fetchData(endpoint), [endpoint])
   return data
}
