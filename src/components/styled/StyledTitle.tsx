import styled from 'styled-components'

export const MainTitle = styled.h1`
   font-size: 2rem;
   letter-spacing: 0.05ch;
   color: ${(props) => props.theme.color};
`

export const Loading = styled.h2`
   color: ${(props) => props.theme.color};
   text-align: center;
   font-size: 10rem;
`

export const CountryName = styled.h2`
   font-size: 1.5rem;
   color: ${(props) => props.theme.color};
`

export const CountrySubTitle = styled.h4`
   display: inline-block;
   font-size: 1.2rem;
   color: ${(props) => props.theme.color};
`
