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
         const {
            population,
            region,
            subregion,
            capital,
            name: { nativeName: native },
            currencies: currency,
            languages: language,
         } = data

         // 1. create array from data in obj above - loop over + return new
         // array (within return statement check whether data is truthy)
         // if so - add data to returned array - if not add 'No data provided'
         // str in place of data
         // 2.  func to repeat actions below - 'any' type for params
         // as don't care about data being passed in

         const nativeName = native
            ? Object.values(native)[0].official
            : 'No data provided'

         const currencies = currency
            ? Object.values(currency)[0].name
            : 'No data provided'

         const languages = language
            ? `${[...Object.values(language)]}`
            : 'No data provided'

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
         const {
            flags: { svg: flag },
            name: { common: name },
         } = data
         const dataToMap = gatherData()
         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={flag} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{name}</CountryName>
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
