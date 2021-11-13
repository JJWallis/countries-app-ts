import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../App'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

const Filter: React.FC = () => {
   const { handleFilterRegions: hfr, countries } = { ...useContext(Context) }
   const [desiredRegion, setDesiredRegion] = useState<string>('')
   const hasDataChanged = useRef(desiredRegion)

   useEffect(() => {
      if (hasDataChanged.current !== desiredRegion) {
         hfr && hfr(desiredRegion)
         hasDataChanged.current = desiredRegion
      }
   }, [desiredRegion, hfr])

   const handleRegions = () => {
      const regions = new Set(countries?.map(({ region }) => region))
      return Array.from(regions)
         .sort()
         .map((region: string) => (
            <StyledOption
               key={region}
               onClick={() => setDesiredRegion(region)}
               // selected={hasDataChanged.current === region}
            >
               {region}
            </StyledOption>
         ))
   }

   return (
      <Wrapper reset>
         <StyledFilter>
            <StyledOption
               selected={desiredRegion === ''}
               onClick={() => setDesiredRegion('')}
            >
               Filter by region
            </StyledOption>
            {handleRegions()}
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
