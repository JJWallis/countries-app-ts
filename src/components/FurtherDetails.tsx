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
         const nativeName = Object.values(data.name.nativeName)[0]
         const currencies = Object.values(data.currencies)[0]
         const languages = `${[...Object.values(data.languages)]}`

         return {
            nativeName: nativeName.official,
            // population: data.population,
            region: data.region,
            subregion: data.subregion,
            capital: data.capital,
            topLevelDomain: data.tld[0],
            currencies: currencies.name,
            languages: languages,
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
