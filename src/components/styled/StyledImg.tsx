import styled, { css } from 'styled-components'

interface Props {
   flag?: boolean
}

export default styled.img<Props>`
   ${({ flag }) => flag && css``}
`
