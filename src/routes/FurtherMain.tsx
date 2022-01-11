import React, { FC } from 'react'
import { FurtherDetailsParent } from '../components/containers/FurtherDetailsContainers.styled'
import FurtherDetails from '../components/FurtherDetails'

const FurtherMain: FC = () => {
   return (
      <FurtherDetailsParent>
         <FurtherDetails />
      </FurtherDetailsParent>
   )
}

export default FurtherMain
