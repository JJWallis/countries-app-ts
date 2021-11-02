import styled, { css } from 'styled-components'
import Arrow from '../../assets/arrow-left.svg'

type Props = {
   back?: boolean
   country?: boolean
}

const Button = styled.button<Props>`
   outline: none;
   border: none;
   border-radius: 5px;
   padding: 1em 3em;
   box-shadow: ${(props) => props.theme.shadow};
   ${(props) =>
      props.back &&
      css`
         background: transparent url(${Arrow}) no-repeat left center / 100%;
      `}
   ${(props) =>
      props.country &&
      css`
         padding-inline: 2em;
      `}
`

export default Button
