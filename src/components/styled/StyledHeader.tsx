import styled from 'styled-components'

const StyledHeader = styled.header`
   position: absolute;
   top: 0;
   width: 100%;
   box-shadow: ${({ theme: { headerShadow } }) => headerShadow};
   padding-block: 1.7rem;
   background-color: ${({ theme: { elements } }) => elements};
   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      padding-block: 0;
   }
`

export default StyledHeader
