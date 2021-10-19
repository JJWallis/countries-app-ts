import styled, { css } from 'styled-components'

type Props = {
   theme?: {}
}

const StyledHeader = styled.header<Props>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.5);
   padding-block: 1rem;
   margin-bottom: 0.4rem;
`

export default StyledHeader
