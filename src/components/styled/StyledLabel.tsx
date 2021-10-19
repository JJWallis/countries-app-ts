import styled from 'styled-components'

export const StyledLabel = styled.label`
   // filter label - need?
   position: absolute;
   display: block;
   top: 50%;
   right: 3%;
   transform: translateY(-50%);
`

export const StyledSwitcher = styled.label`
   color: ${(props) => props.theme.color};
   /* padding */
`
