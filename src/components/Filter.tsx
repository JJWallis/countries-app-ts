import React, { useContext, useState } from 'react'
import { Context } from '../App'
import { StyledFilter, StyledOption } from './styled/StyledFilter'
import Wrapper from './styled/Wrapper'

const Filter: React.FC = () => {
   const context = useContext(Context)
   const [desiredRegion, setDesiredRegion] = useState<string | null>(null)

   const handleRegions = () => {
      const regions = new Set(
         context?.countries?.map(({ region }: any) => region)
      )
      return Array.from(regions)
         .sort()
         .map((region: string) => (
            <StyledOption
               key={region}
               onClick={() => {
                  setDesiredRegion(region)
                  desiredRegion && context?.handleFilterRegions(desiredRegion)
               }}
            >
               {region}
            </StyledOption>
         ))
   }

   // create new state in App - filteredCountries (same 'data' type in App)
   // conditional rendering of CountryCards based off that - if that state is truthy
   // gets priority - but if no countries are filtered, display all countries
   // turned back to 'null' if user clicks 1st option (if value !== '' - then filter)
   // func in App (handleFilterRegions) - ran as callback from here with desiredRegion state value
   // homepage state doesn't get updated - stays falsy

   return (
      <Wrapper reset>
         <StyledFilter>
            <StyledOption value="" onClick={() => setDesiredRegion(null)}>
               Filter by region
            </StyledOption>
            {handleRegions()}
         </StyledFilter>
      </Wrapper>
   )
}

export default Filter
