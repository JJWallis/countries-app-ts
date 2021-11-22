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
   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
   background-color: ${({ theme: { elements } }) => elements};
   color: ${({ theme: { color } }) => color};
   cursor: pointer;

   ${({ back }) =>
      back &&
      css`
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
         padding-inline: 2em;
         margin-right: 1rem;
      `}
      
      ${({ error }) =>
      error &&
      css`
         cursor: not-allowed;
      `}
`

export default Button
