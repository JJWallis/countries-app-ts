import styled, { css } from 'styled-components'

interface Props {
   search?: boolean
   checkbox?: boolean
}

export default styled.input<Props>`
   ${(props) =>
      props.search &&
      css`
         outline: none;
         border: none;
         border-radius: 5px;
         box-shadow: ${(props) => props.theme.shadow};
         background-color: ${(props) => props.theme.elements};
         color: ${(props) => props.theme.input};
         padding: 1.2rem 0 1.2rem 4.5rem;
         width: 37%;
         position: relative;
      `}
   ${(props) =>
      props.checkbox &&
      css`
         position: absolute;
         right: 120px;
         /* opacity: 0; */
      `}
`
