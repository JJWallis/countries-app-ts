import React, { useContext } from 'react'
import { Context } from '../App'

interface Props {
   key: string
   data: {
      flags: { svg: string }
      name: { common: string; nativeName: { fra: { commmon: string } } }
      population: string
      region: string
      subregion: string
      capital: string
      tld: string[]
   }
}

const FurtherDetails: React.FC<Props> = ({ data }) => {
   // const { flags, name, population, region, capital } = data
   // const context = useContext(Context)
   return <div></div>
}

export default FurtherDetails
