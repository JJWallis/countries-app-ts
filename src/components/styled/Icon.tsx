import styled, { css } from 'styled-components'

type IconProps = {
   moon?: boolean
   search?: boolean
   darkTheme: boolean
}

export default styled.svg<IconProps>`
   cursor: pointer;
   ${({ moon }) =>
      moon &&
      css`
         display: block;
         position: absolute;
         right: 100px;
         top: 50%;
         transform: translateY(-50%);
         height: 20px;
      `}
   ${({ search }) => search && css``}
`
