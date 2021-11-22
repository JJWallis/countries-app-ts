import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) =>
      flag &&
      css`
         margin: 0 auto;
         box-shadow: ${({ theme }) => theme.furtherImgShadowMb};
         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            margin: unset;
            box-shadow: ${({ theme }) => theme.furtherImgShadowWd};
         }
      `}
`
