import React from 'react'
import StyledMain from './styled/StyledMain'
import { MainContainer } from './containers/MainContainer.styled'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'

const Main: React.FC = () => {
   // const [filteredRegions, setFilteredRegions] = useState<CountryData>(null)

   // const handleFilterRegions = (region: string) => {
   //    if (!region) {
   //       setFilteredRegions(null)
   //       return
   //    }
   //    const filteredData = countries?.filter(
   //       (country) => country.region.toLowerCase() === region.toLowerCase()
   //    )
   //    filteredData && setFilteredRegions(filteredData)
   // }

   return (
      <StyledMain>
         <MainContainer>
            <SearchFilter />
            <Countries />
         </MainContainer>
      </StyledMain>
   )
}

export default Main
