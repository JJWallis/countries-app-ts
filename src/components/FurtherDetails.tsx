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

         const nativeName = native
            ? Object.values(native)[0].official
            : undefined

         const currencies = currency
            ? Object.values(currency)[0].name
            : undefined

         const languages = language
            ? `${[...Object.values(language)]}`
            : undefined

         return {
            nativeName,
            population,
            region,
            subRegion: subregion,
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
                  <CountryImg src={flag} alt="The visible country's flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{name}</CountryName>
                  {dataToMap &&
                     Object.entries(dataToMap).map(([key, value]) => (
                        <CountryData key={key}>
                           <CountrySubTitle>
                              {key[0].toUpperCase() +
                                 key
                                    .slice(1, key.length)
                                    .split(/(?=[A-Z])/)
                                    .join(' ')}
                              :
                           </CountrySubTitle>
                           {value
                              ? value.toString().split(',').join(', ')
                              : 'No data provided'}
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
