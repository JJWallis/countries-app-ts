import axios from 'axios'
import { data } from '../../App'

export default async function useFetch(endpoint: string) {
   return axios
      .get<data>(endpoint)
      .then((value) => value.data)
      .catch((err) => {
         console.error(err.message)
         return null
      })
}
