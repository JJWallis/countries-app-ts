import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import Button from '../components/styled/StyledButton'
import Icon from '../components/styled/Icon'

const FurtherHeader: React.FC = () => {
   const { setFurtherDetails } = useFurtherDetailsContext()

   return (
      <>
         <Button back onClick={() => setFurtherDetails(null)}>
            Back
         </Button>
         <Icon arrow aria-hidden="true" focusable="false" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
         </Icon>
      </>
   )
}

export default FurtherHeader
