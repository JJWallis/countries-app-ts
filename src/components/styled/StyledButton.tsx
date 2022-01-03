import styled, { css } from 'styled-components'

type Props = {
   back?: boolean
   country?: boolean
   error?: boolean
   dropDown?: boolean
   dropDownItem?: boolean
}

const Button = styled.button<Props>`
   outline: none;
   border: none;
   border-radius: 5px;
   padding: 0.8em 3em;
   cursor: pointer;
   background-color: ${({ theme: { dynamicTheme } }) => dynamicTheme.elements};
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: background-color
         ${({ theme: { baseTheme } }) => baseTheme.themeTransition},
      color ${({ theme: { baseTheme } }) => baseTheme.themeTransition},
      box-shadow ${({ theme: { baseTheme } }) => baseTheme.themeTransition};

   ${({ back }) =>
      back &&
      css`
         box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
         position: relative;
         font-size: 1.1rem;
         font-weight: 300;
         padding: 0.6em 2em 0.6em 3.8em;
         margin: 1rem 0 2rem;
         @media (min-width: ${({ theme: { baseTheme } }) =>
               baseTheme.desktopBreakpoint}) {
            margin: 1.6rem 0 1.6rem;
            padding-right: 2.4em;
            font-size: 1rem;
         }
      `}

   ${({ country }) =>
      country &&
      css`
         padding: 0.6em 2.5em;
         box-shadow: ${({ theme: { dynamicTheme } }) =>
            dynamicTheme.borderBtnShadow};
         &:hover {
            color: ${({ theme: { dynamicTheme } }) => dynamicTheme.elements};
            background-color: ${({ theme: { dynamicTheme } }) =>
               dynamicTheme.color};
         }
      `}


      ${({ dropDown }) =>
      dropDown &&
      css`
         display: block;
         padding: 0;
         font-size: 1.1rem;
         background: none;
      `}

      ${({ dropDownItem }) =>
      dropDownItem &&
      css`
         padding-block: 0.2rem;
         &:hover {
            text-decoration: underline;
         }
      `}
      
      ${({ error }) =>
      error &&
      css`
         cursor: not-allowed;
         padding-inline: 1.7em;
         box-shadow: ${({ theme: { dynamicTheme } }) =>
            dynamicTheme.borderBtnShadow};
      `}
`

export default Button
