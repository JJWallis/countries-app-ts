import styled from 'styled-components'

type Props = {
   theme?: {}
}

const StyledHeader = styled.header<Props>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-shadow: ${(props) => props.theme.headerShadow};
   padding-block: 1rem;
   background-color: ${(props) => props.theme.elements};
`

export default StyledHeader
