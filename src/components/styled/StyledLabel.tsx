import styled from 'styled-components'

export const StyledLabel = styled.label`
   position: relative;
   padding-block: 1rem;
   font-size: 1.15rem;
   color: ${({ theme: { color } }) => color};
   cursor: pointer;
   &::before {
      content: '';
      display: block;
      height: 10px;
      width: 10px;
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: black;
   }
`
