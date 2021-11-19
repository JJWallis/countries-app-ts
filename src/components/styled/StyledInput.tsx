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
         position: relative;
         border-radius: 5px;
         box-shadow: ${({ theme: { shadow } }) => shadow};
         background-color: ${({ theme: { elements } }) => elements};
         color: ${({ theme: { input } }) => input};
         font-size: 1.2rem;
         padding: 1.2rem 0 1.2rem 4.5rem;
         width: 100%;
         max-width: 550px;
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
            color: red;
            font-weight: bold;
            letter-spacing: 0.1ch;
         }
      `}
`
