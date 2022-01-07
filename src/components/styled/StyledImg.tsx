import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) =>
      flag &&
      css`
         box-shadow: ${({ theme }) => theme.furtherImgShadowMb};

         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            box-shadow: ${({ theme }) => theme.furtherImgShadowWd};
         }
      `}
`
