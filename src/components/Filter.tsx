import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from '../App'
import Button from './styled/StyledButton'
import { StyledOption } from './styled/StyledFilter'
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

   const handleDropDown = () => setToggleDropDown(toggleDropDown ? 0 : 1)

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
            onClick={() => setDesiredRegion('')}
         >
            Filter by region
         </Button>
         <Wrapper dropDown opacity={toggleDropDown}>
            {handleRegions()}
         </Wrapper>
      </Wrapper>
   )
}

export default Filter

// logic below + prevent drop down from firing on click if btn clicked

// func to determine dynamic txt content of btn - use setted up ref in parent
// local state that changes to str of recently clicked btn
// + updates that parent ref (use already written func from parent)
// when component re-mounted - checks whether parent ref === '' (falsy)
// if so - uses default str 'Filter by region' or whatever is in ref

// return (
//    <Wrapper filter="true" display="flex" justify-content="flex-start">
//       <StyledFilter
//          defaultValue={prevFilter}
//          disabled={fetchError?.current}
//          onClick={handleDropDown}
//       >
//          <StyledOption onClick={() => setDesiredRegion('')}>
//             Filter by region
//          </StyledOption>

//          {/* <Wrapper dropDown opacity={toggleDropDown}> */}
//          {handleRegions()}
//          {/* </Wrapper> */}
//       </StyledFilter>
//    </Wrapper>
// )
