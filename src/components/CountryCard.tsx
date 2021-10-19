import React from 'react'

interface Props {}

const CountryCard: React.FC<Props> = () => {
   //    const { flag, name, population, region, capital } = props
   return (
      // build obj with all data below | flag + name as direct properties |
      // other data - put into an obj in parent arr (in key/val pair)
      // map() over that here to produce a StatTitle + StatData(CountryStat) for each

    //   <StyledCountry role="gridcell">
    //      <CountryImg src={flag} alt="Countries flag." />
    //      <CountryName>{name}</CountryName>
    //      <CountryInfo>
    //         <CountrySubTitle>Population:</CountrySubTitle>
    //         <CountryStat>{population}</CountryStat>
    //      </CountryInfo>
    //      <CountryInfo>
    //         <CountrySubTitle>Region:</CountrySubTitle>
    //         <CountryStat>{region}</CountryStat>
    //      </CountryInfo>
    //      <CountrySubTitle>Capital:</CountrySubTitle>
    //      <CountryStat>{capital}</CountryStat>
    //   </StyledCountry>
   )
}

export default CountryCard
