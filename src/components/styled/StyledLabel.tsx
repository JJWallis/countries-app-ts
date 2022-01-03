import styled from 'styled-components'

export const StyledLabel = styled.label`
   padding-block: 1rem;
   font-size: 1.15rem;
   color: ${({ theme: { dynamicTheme } }) => dynamicTheme.color};
   cursor: pointer;
   transition: color ${({ theme: { baseTheme } }) => baseTheme.themeTransition};
`
