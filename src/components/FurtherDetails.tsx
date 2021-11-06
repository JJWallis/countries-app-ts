import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

const FurtherDetails: React.FC = () => {
   const context = useContext(Context)

   const handleDisplay = () => {
      if (context?.furtherDetails) {
         const data: any = context.furtherDetails[0]
         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={data.flags.svg} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{data.name.common}</CountryName>
                  <Wrapper countryData>
                     <CountrySubTitle>Population:</CountrySubTitle>
                     <CountryData>{data.population}</CountryData>
                  </Wrapper>
                  <Wrapper countryData>
                     <CountrySubTitle>Region:</CountrySubTitle>
                     <CountryData>{data.region}</CountryData>
                  </Wrapper>
                  <CountrySubTitle>Capital:</CountrySubTitle>
                  <CountryData>{data.capital}</CountryData>
               </Wrapper>
            </>
         )
      }
   }

   return <>{handleDisplay()}</>
}

export default FurtherDetails
