import styled from 'styled-components'

export default styled.main`
   min-height: 100vh;
   padding-bottom: 6rem;
   background-color: ${({ theme: { mainBgColor } }) => mainBgColor};
`
