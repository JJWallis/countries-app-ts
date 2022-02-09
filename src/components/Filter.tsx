import React, { useEffect, useState, useRef, FC } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useToggle } from '../hooks/useToggle'
import { FilterContainer } from './containers/FilterContainer.styled'
import { DropDownContainer } from './containers/DropDownContainer.styled'
import Button from './styled/StyledButton'
import { useFilteredRegionsDispatch } from '../hooks/useFilteredRegionsDispatch'

interface Props {
   prevFilter: string
   updatePrevFilter: (filter: string) => string
}

const Filter: FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   const { countries, countriesError } = useCountriesContext()
   const handleFilterRegions = useFilteredRegionsDispatch()
   const [desiredRegion, setDesiredRegion] = useState('')
   const [toggleDropDown, setToggleDropDown] = useToggle(false)
   const prevRegion = useRef('')

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
      if (prevRegion.current !== desiredRegion) {
         handleFilterRegions(desiredRegion)
         prevRegion.current = desiredRegion
         updatePrevFilter(desiredRegion)
      }
   }, [desiredRegion, handleFilterRegions, updatePrevFilter])

   useEffect(() => {
      if (prevFilter) setDesiredRegion(prevFilter)
   }, [prevFilter])

   return (
      <FilterContainer fetchError={countriesError} onClick={setToggleDropDown}>
         <Button
            dropDown
            disabled={countriesError}
            onClick={() => !prevFilter && setDesiredRegion('')}
         >
            {!prevFilter ? 'Filter by region' : prevFilter}
         </Button>
         <DropDownContainer opacity={toggleDropDown ? 1 : 0}>
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
         </DropDownContainer>
      </FilterContainer>
   )
}

export default Filter
