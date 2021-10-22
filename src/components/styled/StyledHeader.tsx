import styled from 'styled-components'

const StyledHeader = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-shadow: ${(props) => props.theme.headerShadow};
   padding-block: 1rem;
   background-color: ${(props) => props.theme.elements};
`

export default StyledHeader
