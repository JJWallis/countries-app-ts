import styled, { css } from 'styled-components'

type Props = {
   align?: boolean
   sb?: boolean
   sf?: boolean
   filter?: string
   grid?: boolean
   country?: boolean
   countryImgFlag?: string
   flexChild?: boolean
   display?: 'grid' | 'flexWrap' | string
   main?: boolean
   bordersParent?: boolean
   borders?: boolean
   furtherColumns?: boolean
   furtherColumnsChild?: boolean
   // DYNAMIC
   margin?: string
   padding?: string
   flexWrap?: string
}

export default styled.div.attrs<Props>(
   ({ margin, padding, display, flexWrap }) => ({
      display: display,
      margin: margin,
      padding: padding,
      flexWrap: flexWrap,
   })
)<Props>`
   transition: transform 200ms linear,
      background-color ${({ theme: { themeTransition } }) => themeTransition},
      box-shadow ${({ theme: { themeTransition } }) => themeTransition},
      color ${({ theme: { themeTransition } }) => themeTransition};

   /* DYNAMIC */
   display: ${({ display }) => display};
   padding: ${({ padding }) => padding};
   margin: ${({ margin }) => margin};
   flex-wrap: ${({ flexWrap }) => flexWrap};

   ${({ align }) =>
      align &&
      css`
         margin: 0 auto;
         width: 90%;
         max-width: 1530px;
      `}

   ${({ main }) =>
      main &&
      css`
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
         /* outline: 2px solid white; */
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         gap: 3.5rem 5rem;
         @media (min-width: 1250px) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: auto;
            justify-content: unset;
            gap: 6rem 6rem;
         }
      `}

      ${({ display }) =>
      display === 'flexWrap' &&
      css`
         /* outline: 3px solid purple; */
         display: flex;
         flex-direction: column;
         gap: 3.5rem;
         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            flex-direction: row;
         }
      `}

      ${({ flexChild }) =>
      flexChild &&
      css`
         flex: 1 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
      `}

      ${({ country }) =>
      country &&
      css`
         flex-basis: 310px;
         border-radius: 5px;
         box-shadow: ${({ theme }) => theme.countryCardShadow};
         overflow: hidden;
         cursor: pointer;
         /* background-color: ${({ theme }) => theme.elements}; */
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

      ${({ bordersParent }) =>
      bordersParent &&
      css`
         /* outline: 1px solid red; */
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         gap: 1rem;
         margin-top: 2.8rem;
         @media (max-width: ${({ theme }) => theme.breakpoint}) {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.3rem;
         }
      `}

      ${({ borders }) =>
      borders &&
      css`
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         gap: 0.7rem;
      `}

      ${({ furtherColumns }) =>
      furtherColumns &&
      css`
         display: flex;
         flex-wrap: wrap;
         align-items: baseline;
         gap: 3.1rem;
         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            gap: 6rem;
         }
      `}

      ${({ furtherColumnsChild }) =>
      furtherColumnsChild &&
      css`
         /* outline: 1px solid black; */
         flex: 1 220px;
         max-width: 300px;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            flex-basis: 100px;
         }
      `}
`
