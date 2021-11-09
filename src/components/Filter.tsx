import React, { useContext } from 'react'
import { Context } from '../App'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

const Filter: React.FC = () => {
   const context = useContext(Context)

   const handleRegions = () => {
      const regions = context?.countries?.map(({ region }: any) => region)
   }

   return (
      <Wrapper reset>
         <StyledFilter>
            <StyledOption value="">Filter by region</StyledOption>
            {handleRegions()}
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
