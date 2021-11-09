import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

const Filter: React.FC = () => {
   const { handleFilterRegions: hfr, countries } = { ...useContext(Context) }
   const [desiredRegion, setDesiredRegion] = useState<string>('')

   useEffect(() => {
      hfr && hfr(desiredRegion)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [desiredRegion])

   const handleRegions = () => {
      const regions = new Set(countries?.map(({ region }: any) => region))
      return Array.from(regions)
         .sort()
         .map((region: string) => (
            <StyledOption key={region} onClick={() => setDesiredRegion(region)}>
               {region}
            </StyledOption>
         ))
   }

   return (
      <Wrapper reset>
         <StyledFilter>
            <StyledOption value="" onClick={() => setDesiredRegion('')}>
               Filter by region
            </StyledOption>
            {handleRegions()}
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
