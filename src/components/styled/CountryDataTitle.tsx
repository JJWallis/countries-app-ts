import styled from 'styled-components'

export const CountrySubTitle = styled.strong`
   display: inline;
   margin-right: 0.5rem;
   font-size: 1.1rem;
   font-weight: 400;
   color: ${({ theme: { color } }) => color};
`
