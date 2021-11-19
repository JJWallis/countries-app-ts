import styled from 'styled-components'

export const StyledLabel = styled.label`
   color: ${({ theme: { color } }) => color};
   padding: 1rem;
   cursor: pointer;
`
