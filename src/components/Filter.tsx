import React, { useEffect, useState, useRef } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { useToggle } from '../hooks/useToggle'
import { FilterContainer } from './containers/FilterContainer.styled'
import Button from './styled/StyledButton'
import Wrapper from './styled/Wrapper'

interface Props {
   prevFilter: string
   updatePrevFilter: (filter: string) => string
}

const Filter: React.FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   const { handleFilterRegions } = useGlobalContext()
   const { countries, fetchError } = useCountriesContext()
   const [desiredRegion, setDesiredRegion] = useState('')
   const [toggleDropDown, setToggleDropDown] = useToggle(false)
   const hasDataChanged = useRef('')

   const produceRegions = () => {
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
      <FilterContainer
         fetchError={fetchError?.current}
         aria-label="Filter by region"
         onClick={setToggleDropDown}
      >
         <Button
            dropDown
            disabled={fetchError?.current}
            onClick={() => !prevFilter && setDesiredRegion('')}
         >
            {!prevFilter ? 'Filter by region' : prevFilter}
         </Button>
         <Wrapper dropDown opacity={toggleDropDown ? 1 : 0}>
            {prevFilter && (
               <Button
                  dropDown
                  dropDownItem
                  onClick={() => setDesiredRegion('')}
               >
                  Back to home
               </Button>
            )}
            {produceRegions()}
         </Wrapper>
      </FilterContainer>
   )
}

export default Filter
