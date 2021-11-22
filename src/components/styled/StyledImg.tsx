import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) =>
      flag &&
      css`
         margin: 0 auto;
         box-shadow: 0 0 3px 8px rgba(0, 0, 0, 0.05);
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            margin: unset;
            box-shadow: 0 0 3px 16px rgba(0, 0, 0, 0.05);
         }
      `}
`
