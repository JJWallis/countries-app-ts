import styled, { css } from 'styled-components'

interface Props {
   further?: boolean
   borderTitle?: boolean
}

export const CountrySubTitle = styled.strong<Props>`
   display: inline;
   margin-right: 0.5rem;
   font-size: 1.1rem;
   font-weight: 400;
   color: ${({ theme: theme: {color} }) => color};
   transition: color ${({ theme: { themeTransition } }) => themeTransition};

   ${({ further }) =>
      further &&
      css`
         font-size: 1.1rem;
      `}

   ${({ borderTitle }) =>
      borderTitle &&
      css`
         font-size: 1.5rem;
         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            font-size: 1.1rem;
         }
      `}
`
