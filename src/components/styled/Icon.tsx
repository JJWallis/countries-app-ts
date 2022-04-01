import styled, { css } from 'styled-components'

type IconProps = {
   moon?: boolean
   search?: boolean
   arrow?: boolean
}

const SVG = styled.svg.attrs({
   version: '1.1',
   xmlns: 'http://www.w3.org/2000/svg',
   xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

export default styled(SVG)<IconProps>`
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
         cursor: unset;
      `}

   ${({ search }) =>
      search &&
      css`
         position: static;
         fill: ${({ theme: { input } }) => input};
         transform: unset;
         cursor: unset;
      `}

      ${({ arrow }) =>
      arrow &&
      css`
         top: 47px;
         left: 28px;
         @media (max-width: ${({ theme }) => theme.breakpoint}) {
            top: 42%;
         }
      `}
`
