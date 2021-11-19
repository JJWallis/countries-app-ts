import styled from 'styled-components'

export const StyledFilter = styled.select`
   border-radius: 5px;
   border: none;
   padding: 1.2rem 3.5rem 1.2rem 1rem;
   background-color: ${({ theme: { elements } }) => elements};
   box-shadow: ${({ theme: { shadow } }) => shadow};
   color: ${({ theme: { color } }) => color};
   font-size: 1.1rem;
`

export const StyledOption = styled.option``
