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
   transition: fill ${({ theme: { themeTransition } }) => themeTransition};

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
         top: 47px;
         left: 28px;
         @media (max-width: ${({ theme }) => theme.breakpoint}) {
            top: 42%;
         }
      `}
`
