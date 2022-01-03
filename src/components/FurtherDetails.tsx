import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import BorderCountries from './BorderCountries'

type DataToMap =
   | {
        nativeName: string | undefined
        population: number
        region: string
        subRegion: string
        capital: string
     }
   | {
        topLevelDomain: string[][0]
        currencies: string | undefined
        languages: string | undefined
     }

// or destructure data vars + spread into a new object immediately (post running func above each time)

const FurtherDetails: React.FC = () => {
   const { furtherDetails } = useFurtherDetailsContext()
   const data = furtherDetails ? furtherDetails[0] : null

   const printFlag = () => {
      if (data) {
         return (
            <Wrapper as="article" flexChild>
               <CountryImg flag src={data.flags.svg} alt="Country flag." />
            </Wrapper>
         )
      }
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

   const gatherDataOne = () => {
      if (data) {
         const {
            name: { nativeName: native },
            population,
            region,
            subregion,
            capital,
         } = data

         return printData({
            nativeName: native ? Object.values(native)[0].official : undefined,
            population,
            region,
            subRegion: subregion,
            capital,
         })
      }
   }

   const gatherDataTwo = () => {
      if (data) {
         const { currencies: currency, languages: language } = data

         return printData({
            topLevelDomain: data.tld[0],
            currencies: currency ? Object.values(currency)[0].name : undefined,
            languages: language ? `${[...Object.values(language)]}` : undefined,
         })
      }
   }

   return (
      <>
         {printFlag()}
         <Wrapper as="article" flexChild>
            <CountryName further>
               {data ? data.name.common : 'No name'}
            </CountryName>
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
