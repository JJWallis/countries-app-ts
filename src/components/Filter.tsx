import React, { useEffect, useState, useRef } from 'react'
import Button from './styled/StyledButton'
import Wrapper from './styled/Wrapper'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useGlobalContext } from '../hooks/useGlobalContext'

interface Props {
   prevFilter: string
   updatePrevFilter: (filter: string) => string
}

const Filter: React.FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   const { handleFilterRegions } = useGlobalContext()
   const { countries, fetchError } = useCountriesContext()
   const [desiredRegion, setDesiredRegion] = useState('')
   const [toggleDropDown, setToggleDropDown] = useState(0)
   const hasDataChanged = useRef('')

   const handleDropDown = () => setToggleDropDown(toggleDropDown ? 0 : 1)
   const handleDropDownReset = () => !prevFilter && setDesiredRegion('')

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

   useEffect(() => {
      if (hasDataChanged.current !== desiredRegion) {
         handleFilterRegions(desiredRegion)
         hasDataChanged.current = desiredRegion
         updatePrevFilter(desiredRegion)
      }
   }, [desiredRegion, handleFilterRegions, updatePrevFilter])

   useEffect(() => {
      if (prevFilter) setDesiredRegion(prevFilter)
   }, [prevFilter])

   return (
      <Wrapper
         filter="true"
         display="flex"
         justify-content="flex-start"
         onClick={handleDropDown}
         fetchError={fetchError?.current}
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
