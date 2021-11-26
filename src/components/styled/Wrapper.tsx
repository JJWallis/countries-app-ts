import styled, { css } from 'styled-components'

type Props = {
   align?: boolean
   sf?: boolean
   filter?: string
   country?: boolean
   countryImgFlag?: string
   flexChild?: boolean
   main?: boolean
   bordersParent?: boolean
   furtherColumns?: boolean
   furtherColumnsChild?: boolean
   display?: 'grid' | 'flexWrap' | string
   dropDown?: boolean
   // dynamic
   margin?: string
   padding?: string
   flexWrap?: 'wrap' | 'no-wrap'
   justifyContent?: string
   alignItems?: string
   gap?: string
   position?: string
   opacity?: number
}

export default styled.div.attrs<Props>(
   ({
      margin,
      padding,
      display,
      flexWrap,
      alignItems,
      gap,
      justifyContent,
      position,
      opacity,
   }) => ({
      display: display,
      margin: margin,
      padding: padding,
      flexWrap: flexWrap,
      alignItems: alignItems,
      justifyContent: justifyContent,
      gap: gap,
      position: position,
      opacity: opacity,
   })
)<Props>`
   display: ${({ display }) => display};
   padding: ${({ padding }) => padding};
   margin: ${({ margin }) => margin};
   flex-wrap: ${({ flexWrap }) => flexWrap};
   align-items: ${({ alignItems }) => alignItems};
   gap: ${({ gap }) => gap};
   justify-content: ${({ justifyContent }) => justifyContent};
   position: ${({ position }) => position};

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
         transition: transform 200ms linear,
            background-color
               ${({ theme: { themeTransition } }) => themeTransition},
            box-shadow ${({ theme: { themeTransition } }) => themeTransition};
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
         flex: 1 220px;
         max-width: 300px;
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            flex-basis: 100px;
         }
      `}

      ${({ filter }) =>
      filter &&
      css`
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         width: 240px;
         padding: 1.2rem 1.7rem;
         border-radius: 5px;
         box-shadow: ${({ theme }) => theme.shadow};
         background-color: ${({ theme: { elements } }) => elements};
         cursor: pointer;
         &::after {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            border-right: 5px solid red;
            border-left: 5px solid red;
            border-top: 0 solid transparent;
            position: absolute;
            top: 153px;
            left: 200px;
            @media (min-width: ${({ theme }) => theme.breakpoint}) {
               left: unset;
               right: 25px;
               top: 50%;
               transform: translateY(-50%);
            }
         }
         transition: background-color
               ${({ theme: { themeTransition } }) => themeTransition},
            box-shadow ${({ theme: { themeTransition } }) => themeTransition};
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            justify-content: flex-end;
            width: 220px;
         }
      `}

      ${({ dropDown }) =>
      dropDown &&
      css`
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
         opacity: ${({ opacity }) => opacity};
         transition: background-color
               ${({ theme: { themeTransition } }) => themeTransition},
            color ${({ theme: { themeTransition } }) => themeTransition},
            opacity ${({ theme: { themeTransition } }) => themeTransition};
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            top: 68px;
            left: unset;
            right: 0;
            width: 220px;
         }
      `}
`
