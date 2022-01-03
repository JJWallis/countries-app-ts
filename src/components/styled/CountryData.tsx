import styled, { css } from 'styled-components'

interface Props {
   further?: boolean
}

export const CountryData = styled.p<Props>`
   display: inline;
   font-size: 1rem;
   font-weight: 200;
   color: ${({ theme: { theme: color } }) => color};
   transition: color
      ${({
         theme: {
            theme: { themeTransition },
         },
      }) => themeTransition};
   ${({ further }) =>
      further &&
      css`
         display: block;
         font-size: 1.1rem;
         margin-bottom: 1rem;
         @media (min-width: ${({
               theme: {
                  theme: { furtherBreakpoint },
               },
            }) => furtherBreakpoint}) {
            margin-bottom: 0.5rem;
         }
      `}
`
