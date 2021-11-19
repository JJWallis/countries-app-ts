import styled from 'styled-components'

const StyledHeader = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-shadow: ${({ theme: { headerShadow } }) => headerShadow};
   padding-block: 1rem;
   background-color: ${({ theme: { elements } }) => elements};
`

export default StyledHeader
