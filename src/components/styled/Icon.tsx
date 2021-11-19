import styled, { css } from 'styled-components'

type IconProps = {
   moon?: boolean
   search?: boolean
}

export default styled.svg<IconProps>`
   display: block;
   position: absolute;
   cursor: pointer;
   ${({ moon }) =>
      moon &&
      css`
         right: 100px;
         top: 50%;
         transform: translateY(-50%);
         height: 20px;
         fill: ${({ theme: { color } }) => color};
      `}
   ${({ search }) =>
      search &&
      css`
         height: 27px;
         top: 20px;
         left: 30px;
         fill: ${({ theme: { input } }) => input};
      `}
`
