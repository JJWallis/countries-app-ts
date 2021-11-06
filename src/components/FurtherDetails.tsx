import React, { useContext } from 'react'
import { Context } from '../App'
import Wrapper from './styled/Wrapper'
import CountryImg from './styled/StyledImg'
import { CountryName } from './styled/StyledTitle'
import { CountrySubTitle } from './styled/CountryDataTitle'
import { CountryData } from './styled/CountryData'

const FurtherDetails: React.FC = () => {
   const context = useContext(Context)

   const produceJSX = () => {}

   const handleContentVisible = () => {
      if (context?.furtherDetails) {
         const data: any = context.furtherDetails[0]
         console.log(data)
         const nativeName: any = Object.values(data.name.nativeName)[0]
         const currencies: any = Object.values(data.currencies)[0]
         const languages = Object.values(data.languages)
         return (
            <>
               <Wrapper flexChild>
                  <CountryImg src={data.flags.svg} alt="Countries flag." />
               </Wrapper>
               <Wrapper flexChild>
                  <CountryName>{data.name.common}</CountryName>
                  <CountryData>
                     <CountrySubTitle>Native Name:</CountrySubTitle>
                     {nativeName.official}
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
                  <CountryData>
                     <CountrySubTitle>Currencies: </CountrySubTitle>
                     {currencies.name}
                  </CountryData>
                  <CountryData>
                     <CountrySubTitle>Languages: </CountrySubTitle>
                     {languages.map((language: any) => ` ${language},`)}
                  </CountryData>
                  {/* border-countries component */}
               </Wrapper>
            </>
         )
      }
   }

   return <>{handleContentVisible()}</>
}

export default FurtherDetails
