import axios from 'axios'
import { useEffect, useState } from 'react'
import { data } from '../../App'

export default async function useFetch(endpoint: string) {
   const [data, setData] = useState<data>(null)

   function fetchData(endpoint: string) {
      axios
         .get<data>(endpoint)
         .then((value) => setData(value.data))
         .catch((err) => {
            console.error(err.message)
         })
   }

   useEffect(() => fetchData(endpoint), [endpoint])
   return data
}
