import styled from 'styled-components'

interface Props {
   fetchError: boolean
}

export const FilterContainer = styled.div<Props>`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   width: 240px;
   padding: 1.2rem 1.7rem;
   border-radius: 5px;
   cursor: pointer;
   pointer-events: ${({ fetchError }) => (fetchError ? 'none' : 'all')};
   box-shadow: ${({ theme }) => theme.shadow};
   background-color: ${({ theme: { elements } }) => elements};
   transition: background-color
         ${({ theme: { themeTransition } }) => themeTransition},
      box-shadow ${({ theme: { themeTransition } }) => themeTransition};

   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      justify-content: flex-end;
      width: 220px;
   }

   &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-top: 5px solid ${({ theme: { color } }) => color};
      position: absolute;
      top: 153px;
      left: 200px;
      transition: border-top
         ${({ theme: { themeTransition } }) => themeTransition};

      @media (min-width: ${({ theme }) => theme.breakpoint}) {
         left: unset;
         right: 25px;
         top: 50%;
         transform: translateY(-50%);
      }
   }
`
