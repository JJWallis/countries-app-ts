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
      display === 'flexWrap' &&
      css`
         display: flex;
         flex-direction: column;
         gap: 3.5rem;
         @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
            flex-direction: row;
         }
      `}
`
