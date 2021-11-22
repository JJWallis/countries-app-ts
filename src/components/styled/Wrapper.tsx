import styled, { css } from 'styled-components'

type Props = {
   align?: boolean
   spacing?: boolean
   sb?: boolean
   sf?: boolean
   filter?: boolean
   grid?: boolean
   country?: boolean
   countryImgFlag?: string
   countryDataParent?: boolean
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
         outline: 2px solid white;
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         gap: 3rem;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            justify-content: unset;
            gap: 3rem;
         }
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
         flex-basis: 360px;
         border-radius: 5px;
         box-shadow: ${({ theme }) => theme.countryCardShadow};
         padding: 0 0 1rem 0;
         overflow: hidden;
         background-color: ${({ theme }) => theme.elements};
         cursor: pointer;
         transition: transform 200ms linear;
         &:hover {
            transform: scale(1.05);
         }
      `}
      
      ${({ countryImgFlag }) =>
      countryImgFlag &&
      css`
         background-image: url(${countryImgFlag});
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         min-height: 12rem;
      `}

      ${({ countryDataParent }) =>
      countryDataParent &&
      css`
         padding: 1.5rem 1.7rem 2rem;
      `}

      ${({ countryData }) =>
      countryData &&
      css`
         margin-bottom: 0.2rem;
      `}

      ${({ flexChild }) =>
      flexChild &&
      css`
         flex: 1 400px;
      `}
`
