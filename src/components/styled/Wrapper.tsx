import styled, { css } from 'styled-components'

interface Props {
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
   fetchError?: boolean
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

   ${({ display }) =>
      display === 'grid' &&
      css`
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
         transform: ${({ opacity }) =>
            opacity === 0 ? 'translateY(-15%)' : 'translateY(0%)'};
         opacity: ${({ opacity }) => opacity};
         pointer-events: ${({ opacity }) => (opacity === 0 ? 'none' : 'all')};
         transition: background-color
               ${({ theme: { themeTransition } }) => themeTransition},
            color ${({ theme: { themeTransition } }) => themeTransition},
            opacity ${({ theme: { themeTransition } }) => themeTransition},
            transform ${({ theme: { themeTransition } }) => themeTransition};
         @media (min-width: ${({ theme }) => theme.breakpoint}) {
            top: 68px;
            left: unset;
            right: 0;
            width: 220px;
         }
      `}
`
