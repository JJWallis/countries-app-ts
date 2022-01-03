import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) =>
      flag &&
      css`
         box-shadow: ${({ theme: { dynamicTheme } }) =>
            dynamicTheme.furtherImgShadowMb};
         transition: box-shadow
            ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
         @media (min-width: ${({ theme: { baseTheme } }) =>
               baseTheme.furtherBreakpoint}) {
            box-shadow: ${({ theme: { dynamicTheme } }) =>
               dynamicTheme.furtherImgShadowWd};
         }
      `}
`
