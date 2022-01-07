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

export default styled.div.attrs<Props>(({ margin, padding }) => ({
   margin: margin,
   padding: padding,
}))<Props>`
   padding: ${({ padding }) => padding};
   margin: ${({ margin }) => margin};
`
