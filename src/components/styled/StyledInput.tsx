import styled, { css } from 'styled-components'

interface Props {
   search?: boolean
   checkbox?: boolean
   error?: boolean
}

export default styled.input<Props>`
   ${({ search }) =>
      search &&
      css`
         outline: none;
         border: none;
         border-radius: 5px;
         box-shadow: ${({ theme: { baseTheme } }) => baseTheme.shadow};
         background-color: ${({ theme: { dynamicTheme } }) =>
            dynamicTheme.elements};
         color: ${({ theme: { dynamicTheme } }) => dynamicTheme.input};
         font-size: 1.2rem;
         padding: 1.2rem 0 1.2rem 5.5rem;
         width: 100%;
         max-width: 550px;
         transition: background-color
               ${({ theme: { baseTheme } }) => baseTheme.themeTransition},
            color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
         @media (min-width: ${({ theme: { baseTheme } }) =>
               baseTheme.desktopBreakpoint}) {
            font-size: 1.1rem;
            width: 55%;
         }
      `}
   ${({ checkbox }) =>
      checkbox &&
      css`
         position: absolute;
         right: 120px;
         opacity: 0;
      `}
      ${({ error }) =>
      error &&
      css`
         &::placeholder {
            color: #ff3848;
            font-weight: bold;
            letter-spacing: 0.1ch;
         }
      `}
`
