import styled from 'styled-components'

interface Props {
   margin?: string
   padding?: string
}

export default styled.div.attrs<Props>(({ margin, padding }) => ({
   margin: margin,
   padding: padding,
}))<Props>`
   padding: ${({ padding }) => padding};
   margin: ${({ margin }) => margin};
`
