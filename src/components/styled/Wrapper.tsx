import styled, { css } from 'styled-components'

type Props = {
   align?: boolean
   spacing?: boolean
   sb?: boolean
   sf?: boolean
   filter?: boolean
   grid?: boolean
   country?: boolean
   countryData?: boolean
   flexWrap?: boolean
   flexChild?: boolean
   display?: 'grid' | 'flexWrap'
   main?: boolean
}

export default styled.div<Props>`
   ${({ align }) =>
      align &&
      css`
         margin: 0 auto;
         width: 90%;
         max-width: 1500px;
      `}

   ${({ spacing }) =>
      spacing &&
      css`
         padding-block: 1rem;
      `}

      ${({ main }) =>
      main &&
      css`
         padding-top: 1rem;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            padding-top: 2.3rem;
         }
      `} 

   ${({ filter }) =>
      filter &&
      css`
         display: flex;
         justify-content: flex-start;
         width: 240px;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            justify-content: flex-end;
            width: 220px;
         }
      `}

   ${({ sb }) =>
      sb &&
      css`
         display: flex;
         justify-content: space-between;
         align-items: center;
         position: relative;
      `}

   ${({ sf }) =>
      sf &&
      css`
         margin: 1.5rem 0 4rem;
         @media (max-width: ${({ theme }) => theme.breakpoint}) {
            flex-direction: column;
            justify-content: unset;
            align-items: flex-start;
            gap: 3.5rem;
            margin-bottom: 3.5rem;
         }
      `}
 
      ${({ display }) =>
      display === 'grid' &&
      css`
         display: grid;
         width: 100%;
         grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
         grid-template-rows: auto;
         grid-auto-rows: auto;
         grid-gap: 4rem;
      `}

      ${({ display }) =>
      display === 'flexWrap' &&
      css`
         display: flex;
         flex-wrap: wrap;
         gap: 3rem;
      `}

      ${({ country }) =>
      country &&
      css`
         border-radius: 5px;
         box-shadow: ${(props) => props.theme.shadow};
         padding: 0 0 1rem 0;
         overflow: hidden;
         background-color: ${(props) => props.theme.elements};
         cursor: pointer;
         transition: transform 200ms linear;
         &:hover {
            transform: scale(1.1);
         }
      `}

      ${({ countryData }) =>
      countryData &&
      css`
         margin: 0;
         width: 100%;
         padding: 0;
      `}

      ${({ flexChild }) =>
      flexChild &&
      css`
         flex: 1 400px;
      `}
`
