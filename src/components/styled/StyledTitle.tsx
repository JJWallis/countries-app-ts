import styled, { css } from 'styled-components'

interface LoadingProps {
   error?: boolean
}

interface CountryNameProps {
   further?: boolean
}

export const MainTitle = styled.h1`
   font-size: 1.5rem;
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
   @media (min-width: ${({ theme: { baseTheme } }) =>
         baseTheme.desktopBreakpoint}) {
      font-size: 1.7rem;
   }
`

export const Loading = styled.h2<LoadingProps>`
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   font-size: 4rem;
   text-align: center;
   line-height: 1.1;
   max-width: 700px;
   margin: 0 auto;
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
`

export const CountryName = styled.h2<CountryNameProps>`
   margin-bottom: 0.8rem;
   font-size: 1.4rem;
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};

   ${({ further }) =>
      further &&
      css`
         font-size: 2rem;
         margin-bottom: 1.4rem;
      `}
`

export const CountrySubTitle = styled.h4`
   display: inline-block;
   font-size: 1.2rem;
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
`
