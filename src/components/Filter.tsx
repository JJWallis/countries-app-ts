import React from 'react'
import { StyledFilter, StyledOption } from './styled/StyledFilter'

const Filter: React.FC = () => {
   return (
      <React.Fragment>
         <StyledFilter>
            <StyledOption>Filter by region</StyledOption>
         </StyledFilter>
      </React.Fragment>
   )
}

export default Filter
