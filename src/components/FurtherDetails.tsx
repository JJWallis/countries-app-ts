import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

const FurtherDetails: React.FC = () => {
   const context = useContext(Context)

   const handleContentVisible = () => {
      if (context?.furtherDetails) {
         const data: any = context.furtherDetails[0]
         console.log(data)
         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={data.flags.svg} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{data.name.common}</CountryName>
                  <CountryData>
                     <CountrySubTitle>Native Name:</CountrySubTitle>
                     {data.name.nativeName.fra.common}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Population:</CountrySubTitle>
                     {data.population}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Region:</CountrySubTitle>
                     {data.region}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Sub Region:</CountrySubTitle>
                     {data.subregion}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Capital:</CountrySubTitle>
                     {data.capital}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Top Level Domain:</CountrySubTitle>
                     {data.tld[0]}
                  </CountryData>
               </Wrapper>
            </>
         )
      }
   }

   return <>{handleContentVisible()}</>
}

export default FurtherDetails
