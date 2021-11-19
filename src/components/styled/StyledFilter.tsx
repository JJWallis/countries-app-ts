import styled from 'styled-components'

export const StyledFilter = styled.select`
   border-radius: 5px;
   border: none;
   width: 80%;
   padding: 1rem 6rem 1rem 1rem;
   background-color: ${({ theme: { elements } }) => elements};
   box-shadow: ${({ theme: { shadow } }) => shadow};
   color: ${({ theme: { color } }) => color};
`

export const StyledOption = styled.option``
