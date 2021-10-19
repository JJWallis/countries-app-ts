import styled from 'styled-components'

export const StyledFilter = styled.select`
   border-radius: 5px;
   border: none;
   width: 15%;
   padding: 1rem;
   background-color: ${(props) => props.theme.elements};
   box-shadow: ${(props) => props.theme.shadow};
   color: ${(props) => props.theme.color};
`

export const StyledOption = styled.option``
