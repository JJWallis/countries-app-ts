import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useCountriesContext } from '../hooks/useCountriesContext'
import FurtherDetails from '../components/FurtherDetails'
import { FurtherDetailsParent } from '../components/containers/FurtherDetailsContainers.styled'
import { CountrySubTitle } from '../components/styled/CountryDataTitle'
import { CountryData } from '../components/styled/CountryData'
import CountryImg from '../components/styled/StyledImg'
import {
   FurtherDetailsChild,
   FurtherDetailsColumnsChild,
} from '../components/containers/FurtherDetailsContainers.styled'
import { v4 as uuid } from 'uuid'
import { DataToMap } from '../types/FurtherMain.interface'
import { Country } from '../types/countriesContext.interface'

const FurtherMain: FC = () => {
   const { countries } = useCountriesContext()
   const { country } = useParams()
   const data = countries?.find(
      ({ name }) =>
         name?.common.toLowerCase() ===
            country?.split('-').join(' ').toLowerCase() ||
         name?.common.toLowerCase() === country?.toLowerCase()
   ) as Country

   const printFlag = () => {
      return (
         <FurtherDetailsChild>
            <CountryImg flag src={data.flags.svg} alt="Country flag." />
         </FurtherDetailsChild>
      )
   }

   const printData = (data: DataToMap) => {
      return (
         <FurtherDetailsColumnsChild key={uuid()}>
            {Object.entries(data).map(([key, value]) => (
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
         </FurtherDetailsColumnsChild>
      )
   }

   return (
      <FurtherDetailsParent>
         <FurtherDetails
            data={data}
            printFlag={printFlag}
            printData={printData}
         />
      </FurtherDetailsParent>
   )
}

export default FurtherMain
