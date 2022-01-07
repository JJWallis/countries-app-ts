import styled from 'styled-components'

interface Props {
   opacity: number
}

export const DropDownContainer = styled.div<Props>`
   position: absolute;
   top: 193px;
   left: 0;
   z-index: 300;
   border-radius: 5px;
   padding: 1.2rem 0rem 1.2rem 1rem;
   background-color: ${({ theme: { elements } }) => elements};
   color: ${({ theme: { color } }) => color};
   font-size: 1.1rem;
   width: 240px;
   transform: ${({ opacity }) =>
      opacity === 0 ? 'translateY(-15%)' : 'translateY(0%)'};
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity === 0 ? 'none' : 'all')};
   transition: transform 200ms linear, opacity 200ms linear;
   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      top: 68px;
      left: unset;
      right: 0;
      width: 220px;
   }
`
