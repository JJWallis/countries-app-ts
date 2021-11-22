import styled, { css } from 'styled-components'

interface Props {
   further?: boolean
}

export const CountryData = styled.p<Props>`
   display: inline;
   font-size: 1rem;
   font-weight: 200;
   color: ${({ theme: { color } }) => color};
   ${({ further }) =>
      further &&
      css`
         font-size: 1.2rem;
      `}
`
