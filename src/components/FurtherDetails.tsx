import React, { FC } from 'react'
import { CountryName } from './styled/StyledTitle'
import BorderCountries from './BorderCountries'
import {
   FurtherDetailsChild,
   FurtherDetailsColumns,
} from './containers/FurtherDetailsContainers.styled'
import { ErrorMsg } from './styled/ErrorMsg.styled'
import { FurtherDetailsProps } from '../types/FurtherDetails.interface'

const FurtherDetails: FC<FurtherDetailsProps> = ({
   data,
   printData,
   printFlag,
}) => {
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

         // rest pattern to collect into an obj
         // loop over data - if any falsy throw error
         // else - produce two sep objs based on data groups below
         // Error msg comp at bottom no longer needed
         // as well as condition at top = if (data)

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
               topLevelDomain: tld ? tld[0] : undefined,
               currencies: currencies
                  ? Object.values(currencies)[0].name
                  : undefined,
               languages: languages
                  ? `${[...Object.values(languages)]}`
                  : undefined,
            }),
         ]
      }
      return <ErrorMsg>{'Country not found'}</ErrorMsg>
   }

   return (
      <>
         {printFlag()}
         <FurtherDetailsChild as="article">
            <CountryName further>{data ? data.name.common : ''}</CountryName>
            <FurtherDetailsColumns>{gatherData()}</FurtherDetailsColumns>
            <BorderCountries country={data} />
         </FurtherDetailsChild>
      </>
   )
}

export default FurtherDetails
