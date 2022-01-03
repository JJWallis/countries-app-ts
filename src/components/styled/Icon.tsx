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
   fill: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   transition: fill ${({ theme: { baseTheme } }) => baseTheme.themeTransition};

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
         fill: ${({ theme: { dynamicTheme } }) => dynamicTheme.input};
         transform: unset;
      `}

      ${({ arrow }) =>
      arrow &&
      css`
         top: 47px;
         left: 28px;
         @media (max-width: ${({ theme: { baseTheme } }) =>
               baseTheme.desktopBreakpoint}) {
            top: 42%;
         }
      `}
`
