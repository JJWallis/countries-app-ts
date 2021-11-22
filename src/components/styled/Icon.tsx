import styled, { css } from 'styled-components'

type IconProps = {
   moon?: boolean
   search?: boolean
   arrow?: boolean
}

export default styled.svg<IconProps>`
   display: block;
   position: absolute;
   cursor: pointer;
   height: 27px;
   top: 50%;
   transform: translateY(-50%);
   fill: ${({ theme: { color } }) => color};

   ${({ moon }) =>
      moon &&
      css`
         right: 100px;
         height: 20px;
      `}

   ${({ search }) =>
      search &&
      css`
         top: 20px;
         left: 30px;
         fill: ${({ theme: { input } }) => input};
         transform: unset;
      `}

      ${({ arrow }) =>
      arrow &&
      css`
         top: 45px;
         left: 28px;
         @media (max-width: ${({ theme }) => theme.breakpoint}) {
            top: 42%;
         }
      `}
`
