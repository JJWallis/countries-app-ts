import React from 'react'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'
import CountryImg from './styled/StyledImg'
import BorderCountries from './BorderCountries'
import {
   FurtherDetailsChild,
   FurtherDetailsColumns,
   FurtherDetailsColumnsChild,
} from './containers/FurtherDetailsContainers.styled'

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

const FurtherDetails: React.FC = () => {
   const { furtherDetails } = useFurtherDetailsContext()
   const data = furtherDetails ? furtherDetails[0] : null

   const printFlag = () => {
      if (data) {
         return (
            <FurtherDetailsChild>
               <CountryImg flag src={data.flags.svg} alt="Country flag." />
            </FurtherDetailsChild>
         )
      }
   }

   const printData = (data: DataToMap) => {
      return (
         <FurtherDetailsColumnsChild>
            {data &&
               Object.entries(data).map(([key, value]) => (
                  <CountryData further key={key}>
                     <CountrySubTitle as="p" further>
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
         </FurtherDetailsColumnsChild>
      )
   }

   const gatherData = () => {
      if (data) {
         const {
            name: { nativeName },
            population,
            region,
            subregion: subRegion,
            capital,
            currencies,
            languages,
            tld,
         } = data

         return [
            printData({
               nativeName: nativeName
                  ? Object.values(nativeName)[0].official
                  : undefined,
               population,
               region,
               subRegion,
               capital,
            }),

            printData({
               topLevelDomain: tld[0],
               currencies: currencies
                  ? Object.values(currencies)[0].name
                  : undefined,
               languages: languages
                  ? `${[...Object.values(languages)]}`
                  : undefined,
            }),
         ]
      }
   }

   return (
      <>
         {printFlag()}
         <FurtherDetailsChild as="article">
            <CountryName further>
               {data ? data.name.common : 'No name'}
            </CountryName>
            <FurtherDetailsColumns>{gatherData()}</FurtherDetailsColumns>
            <BorderCountries />
         </FurtherDetailsChild>
      </>
   )
}

export default FurtherDetails
