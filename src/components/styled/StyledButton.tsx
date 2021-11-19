import styled, { css } from 'styled-components'
import Arrow from '../../assets/arrow-left.svg'

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
   ${(props) =>
      props.back &&
      css`
         background: ${({ theme: { elements } }) => elements} url(${Arrow})
            no-repeat 10% center / 20%;
      `}
   ${(props) =>
      props.country &&
      css`
         padding-inline: 2em;
         margin-right: 1rem;
      `}
      ${(props) =>
      props.error &&
      css`
         cursor: not-allowed;
      `}
`

export default Button
