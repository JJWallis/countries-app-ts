import styled, { css } from 'styled-components'

type IconProps = {
   moon?: boolean
   search?: boolean
}

export default styled.svg<IconProps>`
   width: 10px;
   height: 10px;
   ${({ moon }) =>
      moon &&
      css`
         display: block;
         position: absolute;
         right: 100px;
         top: 50%;
         transform: translateY(-50%);
         background-color: black;
      `}
   ${({ search }) => search && css``}
`
