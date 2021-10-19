import styled from 'styled-components'

type HeaderProps = {}

const Header = styled.header<HeaderProps>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.5);
   padding-block: 1rem;
   margin-bottom: 0.4rem;
`

export default Header
