import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../App'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

interface Props {
   prevFilter: string
   updatePrevFilter: (filter: string) => string
}

const Filter: React.FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   const {
      handleFilterRegions: hfr,
      countries,
      fetchError,
   } = { ...useContext(Context) }
   const [desiredRegion, setDesiredRegion] = useState('')
   const hasDataChanged = useRef('')

   useEffect(() => {
      if (hasDataChanged.current !== desiredRegion) {
         hfr && hfr(desiredRegion)
         hasDataChanged.current = desiredRegion
         updatePrevFilter(desiredRegion)
      }
   }, [desiredRegion, hfr, updatePrevFilter])

   const handleRegions = () => {
      const regions = new Set(countries?.map(({ region }) => region))
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
         <StyledFilter defaultValue={prevFilter} disabled={fetchError?.current}>
            <StyledOption onClick={() => setDesiredRegion('')}>
               Filter by region
            </StyledOption>
            {handleRegions()}
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
