import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import BorderCountries from './BorderCountries'

const FurtherDetails: React.FC = () => {
   const { furtherDetails } = { ...useContext(Context) }
   const data = furtherDetails ? furtherDetails[0] : null

   const gatherData = () => {
      if (data) {
         // func that does this - verifyDataPresent/valdateData
         const nativeName = data.name.nativeName
            ? Object.values(data.name.nativeName)[0].official
            : 'No data provided'

         const currencies = data.currencies
            ? Object.values(data.currencies)[0].name
            : 'No data provided :('

         const languages = data.languages
            ? `${[...Object.values(data.languages)]}`
            : 'No data provided :('

         const { population, region, subregion, capital } = data

         return {
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain: data.tld[0],
            currencies,
            languages,
         }
      }
   }

   const printData = () => {
      if (data) {
         const dataToMap = gatherData()
         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={data.flags.svg} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{data.name.common}</CountryName>
                  {dataToMap &&
                     Object.entries(dataToMap).map(([key, value]) => (
                        <CountryData key={key}>
                           <CountrySubTitle>{key}:</CountrySubTitle>
                           {value}
                        </CountryData>
                     ))}
                  <BorderCountries />
               </Wrapper>
            </>
         )
      }
   }

   return <>{printData()}</>
}

export default FurtherDetails
