import styled from 'styled-components'

const StyledHeader = styled.header`
   position: absolute;
   top: 0;
   width: 100%;
   box-shadow: ${({ theme: { baseTheme } }) => baseTheme.headerShadow};
   padding-block: 1.7rem;
   background-color: ${({ theme: { dynamicTheme } }) => dynamicTheme.elements};
   transition: background-color
      ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
   @media (min-width: ${({ theme: { baseTheme } }) =>
         baseTheme.desktopBreakpoint}) {
      padding-block: 0;
   }
`

export default StyledHeader
