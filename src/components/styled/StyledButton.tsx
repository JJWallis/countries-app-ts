import styled, { css } from 'styled-components'

type Props = {
   back?: boolean
   country?: boolean
   error?: boolean
}

const Button = styled.button<Props>`
   outline: none;
   border: none;
   border-radius: 5px;
   padding: 0.8em 3em;
   background-color: ${({ theme: { elements } }) => elements};
   color: ${({ theme: { color } }) => color};
   cursor: pointer;

   ${({ back }) =>
      back &&
      css`
         box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
         position: relative;
         font-size: 1.1rem;
         font-weight: 300;
         padding: 0.6em 2em 0.6em 3.8em;
         margin: 1rem 0 2rem;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            margin: 1.6rem 0 1.6rem;
            padding-right: 2.4em;
            font-size: 1rem;
         }
      `}

   ${({ country }) =>
      country &&
      css`
         padding: 0.5em 2em;
         box-shadow: ${({ theme }) => theme.borderBtnShadow};
      `}
      
      ${({ error }) =>
      error &&
      css`
         cursor: not-allowed;
         padding-inline: 1.7em;
      `}
`

export default Button
