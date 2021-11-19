import styled, { css } from 'styled-components'

interface LoadingProps {
   error?: boolean
}

export const MainTitle = styled.h1`
   font-size: 1.5rem;
   letter-spacing: 0.05ch;
   color: ${({ theme: { color } }) => color};
`

export const Loading = styled.h2<LoadingProps>`
   color: ${({ theme: { color } }) => color};
   text-align: center;
   font-size: 10rem;
   ${({ error }) => error && css``};
`

export const CountryName = styled.h2`
   font-size: 1.5rem;
   color: ${({ theme: { color } }) => color};
`

export const CountrySubTitle = styled.h4`
   display: inline-block;
   font-size: 1.2rem;
   color: ${({ theme: { color } }) => color};
`
