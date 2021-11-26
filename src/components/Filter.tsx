import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../App'
import Button from './styled/StyledButton'
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
   const [toggleDropDown, setToggleDropDown] = useState(0)
   const hasDataChanged = useRef('')

   useEffect(() => {
      if (hasDataChanged.current !== desiredRegion) {
         hfr && hfr(desiredRegion)
         hasDataChanged.current = desiredRegion
         updatePrevFilter(desiredRegion)
      }
   }, [desiredRegion, hfr, updatePrevFilter])

   useEffect(() => {
      prevFilter && setDesiredRegion(prevFilter)
   }, [prevFilter])

   const handleRegions = () => {
      const regions = new Set(countries?.map(({ region }) => region))
      return Array.from(regions)
         .sort()
         .map((region: string) => (
            <Button
               dropDown
               dropDownItem
               key={region}
               onClick={() => setDesiredRegion(region)}
            >
               {region}
            </Button>
         ))
   }

   const handleDropDown = () => setToggleDropDown(toggleDropDown ? 0 : 1)
   const handleDropDownReset = () => !prevFilter && setDesiredRegion('')

   return (
      <Wrapper
         filter="true"
         display="flex"
         justify-content="flex-start"
         onClick={handleDropDown}
      >
         <Button
            dropDown
            disabled={fetchError?.current}
            onClick={handleDropDownReset}
         >
            {!prevFilter ? 'Filter by region' : prevFilter}
         </Button>
         <Wrapper dropDown opacity={toggleDropDown}>
            {prevFilter && (
               <Button
                  dropDown
                  dropDownItem
                  onClick={() => setDesiredRegion('')}
               >
                  Back to Home
               </Button>
            )}
            {handleRegions()}
         </Wrapper>
      </Wrapper>
   )
}

export default Filter
