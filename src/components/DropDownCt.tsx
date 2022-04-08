import React from 'react'
import { DropDownContainer } from './containers/DropDownContainer.styled'

interface Props {
   testId: string
   toggled: boolean
   styleProp: 'filter' | 'search'
}

const DropDownCt: React.FC<Props> = ({
   children,
   testId,
   toggled,
   styleProp,
}) => {
   return (
      <DropDownContainer
         styleProp={styleProp}
         opacity={toggled ? 1 : 0}
         data-testid={testId}
      >
         {children}
      </DropDownContainer>
   )
}

export default DropDownCt
