import styled from 'styled-components'

export default styled.main`
   min-height: 100vh;
   padding: 5rem 0 6rem;
   background-color: ${({ theme: { dynamicTheme } }) =>
      dynamicTheme.mainBgColor};
   transition: background-color
      ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
   @media (max-width: ${({ theme: { baseTheme } }) =>
         baseTheme.desktopBreakpoint}) {
      padding: 9.5rem 0 5rem;
   }
   @media (min-width: ${({ theme: { baseTheme } }) =>
         baseTheme.furtherBreakpoint}) {
      padding-bottom: 15rem;
   }
`
