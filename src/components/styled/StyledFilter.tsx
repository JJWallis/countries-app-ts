import styled from 'styled-components'

export const StyledFilter = styled.select`
   border-radius: 5px;
   border: none;
   padding: 1.2rem 0rem 1.2rem 1rem;
   background-color: ${({ theme: { elements } }) => elements};
   box-shadow: ${({ theme: { shadow } }) => shadow};
   color: ${({ theme: { color } }) => color};
   font-size: 1.1rem;
   width: 100%;
   transition: background-color
         ${({ theme: { themeTransition } }) => themeTransition},
      color ${({ theme: { themeTransition } }) => themeTransition}; ;
`

export const StyledOption = styled.option`
   cursor: pointer;
   transition: transform ${({ theme: { themeTransition } }) => themeTransition};
   &:hover {
      transform: scale(1.01);
   }
`
