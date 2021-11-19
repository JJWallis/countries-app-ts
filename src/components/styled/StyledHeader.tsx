import styled from 'styled-components'

const StyledHeader = styled.header`
   box-shadow: ${({ theme: { headerShadow } }) => headerShadow};
   padding-block: 1.7rem;
   background-color: ${({ theme: { elements } }) => elements};
   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      padding-block: 0;
   }
`

export default StyledHeader
