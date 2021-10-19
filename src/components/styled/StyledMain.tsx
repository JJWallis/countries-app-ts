import styled from 'styled-components'

type Props = {
   theme?: {}
}

export default styled.main<Props>`
   background-color: ${(props) => props.theme.mainBgColor};
`
