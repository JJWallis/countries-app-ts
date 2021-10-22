import styled from 'styled-components'

export default styled.input`
   outline: none;
   border: none;
   border-radius: 5px;
   box-shadow: ${(props) => props.theme.shadow};
   background-color: ${(props) => props.theme.elements};
   color: ${(props) => props.theme.input};
   padding: 1.2rem 0 1.2rem 4.5rem;
   width: 37%;
   position: relative;
`
