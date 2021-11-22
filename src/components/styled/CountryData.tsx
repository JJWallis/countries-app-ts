import styled from 'styled-components'

export const CountryData = styled.p`
   display: inline;
   font-size: 1rem;
   font-weight: 200;
   color: ${({ theme: { color } }) => color};
`
