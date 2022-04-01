import React, { useEffect, useState, useRef, FC } from 'react'
import { useCountriesContext } from '../hooks/useCountriesContext'
import { useToggle } from '../hooks/useToggle'
import { FilterContainer } from './containers/FilterContainer.styled'
import { DropDownContainer } from './containers/DropDownContainer.styled'
import Button from './styled/StyledButton'
import { useFilteredRegionsDispatch } from '../hooks/useFilteredRegionsDispatch'
import DropDownCt from './DropDownCt'

interface Props {
   prevFilter: string
   updatePrevFilter: (filter: string) => string
}

const Filter: FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   const [desiredRegion, setDesiredRegion] = useState('')
   const [toggleDropDown, setToggleDropDown] = useToggle(false)
   const { countries, countriesError } = useCountriesContext()
   const handleFilterRegions = useFilteredRegionsDispatch()
   const prevRegion = useRef('')

   const produceRegions = () => {
      return Array.from(new Set(countries?.map(({ region }) => region)))
         .sort()
         .map((region: string) => (
            <Button
               dropDown
               dropDownItem
               key={region}
               onClick={() => setDesiredRegion(region)}
               aria-selected={desiredRegion === region}
               aria-controls="country-information"
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
            aria-controls="country-information"
         >
            {!prevFilter ? 'Filter by region' : prevFilter}
         </Button>
         <DropDownCt
            toggled={toggleDropDown}
            testId="drop-down-ct"
            styleProp="filter"
         >
            {prevFilter && (
               <Button
                  dropDown
                  dropDownItem
                  onClick={() => setDesiredRegion('')}
                  aria-controls="country-information"
                  aria-selected={desiredRegion === ''}
               >
                  Back to home
               </Button>
            )}
            {produceRegions()}
         </DropDownCt>
      </FilterContainer>
   )
}

export default Filter
