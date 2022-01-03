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
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};

   ${({ further }) =>
      further &&
      css`
         font-size: 1.1rem;
      `}

   ${({ borderTitle }) =>
      borderTitle &&
      css`
         font-size: 1.5rem;
         @media (min-width: ${({ theme: { baseTheme } }) =>
            baseTheme.furtherBreakpoint} {
            font-size: 1.1rem;
         }
      `}
`
