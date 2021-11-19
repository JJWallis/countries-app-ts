import styled, { css } from 'styled-components'

interface Props {
   search?: boolean
}

export default styled.img<Props>`
   display: block;
   max-width: 100%;
   ${({ search }) =>
      search &&
      css`
         width: 40px;
         max-width: unset;
         position: absolute;
         top: 173px;
         left: 6.5%;
         cursor: pointer;
      `}
`
