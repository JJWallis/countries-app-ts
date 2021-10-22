import React from 'react'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

const Filter: React.FC = () => {
   return (
      <Wrapper reset>
         <StyledFilter>
            <StyledOption>Filter by region</StyledOption>
            <StyledOption>Filter by region</StyledOption>
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
