import styled, { css } from 'styled-components'

interface Props {
   opacity: number
   styleProp: 'filter' | 'search'
}

export const DropDownContainer = styled.div<Props>`
   position: absolute;
   z-index: 300;
   padding: 1.2rem 0rem 1.2rem 1rem;
   font-size: 1.1rem;
   border-radius: 5px;
   color: ${({ theme: { color } }) => color};
   background-color: ${({ theme: { elements } }) => elements};
   box-shadow: ${({ theme }) => theme.shadow};
   transform: ${({ opacity }) =>
      opacity === 0 ? 'translateY(-15%)' : 'translateY(0%)'};
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity === 0 ? 'none' : 'all')};
   transition: transform 200ms linear, opacity 200ms linear;

   ${({ styleProp }) =>
      styleProp === 'filter' &&
      css`
         top: 193px;
         left: 0;
         width: 240px;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            top: 68px;
            left: unset;
            right: 0;
            width: 220px;
         }
      `}
`
