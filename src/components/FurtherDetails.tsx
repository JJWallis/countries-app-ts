import React from 'react'
import { Country } from '../context/countriesContext'
import { DataToMap } from '../routes/FurtherMain'
import { CountryName } from './styled/StyledTitle'
import BorderCountries from './BorderCountries'
import {
   FurtherDetailsChild,
   FurtherDetailsColumns,
} from './containers/FurtherDetailsContainers.styled'

interface Props {
   data: Country | undefined
   printFlag: () => JSX.Element | undefined
   printData: (data: DataToMap) => JSX.Element
}

const FurtherDetails: React.FC<Props> = ({ data, printData, printFlag }) => {
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
               topLevelDomain: tld[0] ? tld[0] : undefined,
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
            <BorderCountries country={data} />
         </FurtherDetailsChild>
      </>
   )
}

export default FurtherDetails
