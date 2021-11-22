import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) =>
      flag &&
      css`
         width: 100%;
         max-width: 700px;
         margin: 0 auto;
      `}
`
