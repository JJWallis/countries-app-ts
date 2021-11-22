import styled, { css } from 'styled-components'

interface LoadingProps {
   error?: boolean
}

export const MainTitle = styled.h1`
   font-size: 1.5rem;
   color: ${({ theme: { color } }) => color};
   @media (min-width: ${({ theme: { breakpoint } }) => breakpoint}) {
      font-size: 1.7rem;
   }
`

export const Loading = styled.h2<LoadingProps>`
   color: ${({ theme: { color } }) => color};
   font-size: 5rem;
   text-align: center;
   line-height: 1.1;
   margin-bottom: 1rem;
   @media (min-width: ${({ theme: { breakpoint } }) => breakpoint}) {
      font-size: 4rem;
   }

   ${({ error }) => error && css``};
`

export const CountryName = styled.h2`
   margin-bottom: 0.8rem;
   font-size: 1.4rem;
   color: ${({ theme: { color } }) => color};
`

export const CountrySubTitle = styled.h4`
   display: inline-block;
   font-size: 1.2rem;
   color: ${({ theme: { color } }) => color};
`
