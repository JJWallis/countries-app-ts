import React from 'react'
import { StyledFilter } from './styled/StyledFilter'
import { StyledLabel } from './styled/StyledLabel'

interface Props {}

const Filter: React.FC<Props> = () => {
   return (
      <React.Fragment>
         <StyledFilter></StyledFilter>
         <StyledLabel>Filter by Region</StyledLabel>
      </React.Fragment>
   )
}

export default Filter
