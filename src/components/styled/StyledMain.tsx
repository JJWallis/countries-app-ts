import styled from 'styled-components'

export default styled.main`
   min-height: 100vh;
   padding: 5rem 0 6rem;
   background-color: ${({ theme: { mainBgColor } }) => mainBgColor};
   transition: background-color
      ${({ theme: { themeTransition } }) => themeTransition};
   @media (max-width: ${({ theme }) => theme.breakpoint}) {
      padding: 9.5rem 0 5rem;
   }
   @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
      padding-bottom: 15rem;
   }
`
