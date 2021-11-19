import styled from 'styled-components'

export default styled.main`
   min-height: 100vh;
   background-color: ${({ theme: { mainBgColor } }) => mainBgColor};
`
