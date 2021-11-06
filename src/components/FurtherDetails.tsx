import React from 'react'

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

const FurtherDetails: React.FC<Props> = (props) => {
   return <div></div>
}

export default FurtherDetails
