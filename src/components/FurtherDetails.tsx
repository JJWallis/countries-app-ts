import React, { useContext } from 'react'
import { Country } from '../context/countriesContext'
import { Context } from '../components/Context'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import BorderCountries from './BorderCountries'

const FurtherDetails: React.FC = () => {
   const { furtherDetails } = { ...useContext(Context) }
   const data = furtherDetails ? furtherDetails[0] : null
   const name = data ? data.name.common : 'No name'

   type DataToMap =
      | {
           nativeName: string | undefined
           population: Country['population']
           region: Country['region']
           subRegion: Country['subregion']
           capital: Country['capital']
        }
      | {
           topLevelDomain: Country['tld'][0]
           currencies: string | undefined
           languages: string | undefined
        }

   const printData = (data: DataToMap) => {
      return (
         <Wrapper as="article" furtherColumnsChild>
            {data &&
               Object.entries(data).map(([key, value]) => (
                  <CountryData further key={key}>
                     <CountrySubTitle further>
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
         </Wrapper>
      )
   }

   const printFlag = () => {
      if (data) {
         const {
            flags: { svg: flag },
         } = data

         return (
            <Wrapper as="article" flexChild>
               <CountryImg flag src={flag} alt="Country flag." />
            </Wrapper>
         )
      }
   }

   const gatherDataOne = () => {
      if (data) {
         const {
            name: { nativeName: native },
            population,
            region,
            subregion,
            capital,
         } = data

         const nativeName = native
            ? Object.values(native)[0].official
            : undefined

         const dataToMap = {
            nativeName,
            population,
            region,
            subRegion: subregion,
            capital,
         }

         return printData(dataToMap)
      }
   }

   const gatherDataTwo = () => {
      if (data) {
         const { currencies: currency, languages: language } = data

         const currencies = currency
            ? Object.values(currency)[0].name
            : undefined

         const languages = language
            ? `${[...Object.values(language)]}`
            : undefined

         const dataToMap = {
            topLevelDomain: data.tld[0],
            currencies,
            languages,
         }

         return printData(dataToMap)
      }
   }

   return (
      <>
         {printFlag()}
         <Wrapper as="article" flexChild>
            <CountryName further>{name}</CountryName>
            <Wrapper furtherColumns>
               {gatherDataOne()}
               {gatherDataTwo()}
            </Wrapper>
            <BorderCountries />
         </Wrapper>
      </>
   )
}

export default FurtherDetails
