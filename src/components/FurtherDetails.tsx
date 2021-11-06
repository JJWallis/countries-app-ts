import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

const FurtherDetails: React.FC = () => {
   const context = useContext(Context)

   const handleContentVisible = () => {
      if (context?.furtherDetails) {
         const data: any = context.furtherDetails[0]
         const nativeName: any = Object.values(data.name.nativeName)[0]
         const currencies: any = Object.values(data.currencies)[0]
         const languages = `${[...Object.values(data.languages)]}`

         const dataToMap = {
            nativeName: nativeName.official,
            population: data.population,
            region: data.region,
            subregion: data.subregion,
            capital: data.capital,
            topLevelDomain: data.tld[0],
            currencies: currencies.name,
            languages: languages,
         }

         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={data.flags.svg} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{data.name.common}</CountryName>
                  {Object.entries(dataToMap).map(([key, value]) => (
                     <CountryData key={key}>
                        <CountrySubTitle>{key}:</CountrySubTitle>
                        {value}
                     </CountryData>
                  ))}
                  {/* border-countries component */}
               </Wrapper>
            </>
         )
      }
   }
   return <>{handleContentVisible()}</>
}

export default FurtherDetails
