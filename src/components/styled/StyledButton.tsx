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
   box-shadow: ${({ theme: { shadow } }) => shadow};
   background-color: ${({ theme: { elements } }) => elements};
   color: ${({ theme: { color } }) => color};
   cursor: pointer;

   ${({ back }) =>
      back &&
      css`
         position: relative;
         font-size: 1rem;
         font-weight: 300;
         padding: 0.6em 2.5em 0.6em 3.8em;
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
