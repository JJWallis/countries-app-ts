import React from 'react'
import { StyledFilter, StyledOption } from './styled/StyledFilter'

interface Props {}

const Filter: React.FC<Props> = () => {
   return (
      <React.Fragment>
         <StyledFilter>
            <StyledOption>Filter by region</StyledOption>
         </StyledFilter>
      </React.Fragment>
   )
}

export default Filter
