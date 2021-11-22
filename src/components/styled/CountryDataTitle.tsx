import styled, { css } from 'styled-components'

interface Props {
   further?: boolean
}

export const CountrySubTitle = styled.strong<Props>`
   display: inline;
   margin-right: 0.5rem;
   font-size: 1.1rem;
   font-weight: 400;
   color: ${({ theme: { color } }) => color};

   ${({ further }) =>
      further &&
      css`
         font-size: 1.1rem;
      `}
`
