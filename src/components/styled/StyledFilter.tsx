import styled from 'styled-components'

export const StyledOption = styled.option`
   cursor: pointer;
   transition: transform ${({ theme: { themeTransition } }) => themeTransition};
   &:hover {
      transform: scale(1.01);
   }
`
