import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { Country } from '../context/countriesContext'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import BorderCountries from './BorderCountries'

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

// function validating data (dynamic generics) - declare as vars at top (like below?)
// or destructure data vars + spread into a new object immediately (post running func above each time)

const FurtherDetails: React.FC = () => {
   const { furtherDetails } = useFurtherDetailsContext()
   const data = furtherDetails ? furtherDetails[0] : null
   const name = data ? data.name.common : 'No name'

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
         } = { ...data }
         // obj unpacking – reverse above!!!!

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
         // destructure with 'let' so can re-use var name?
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
