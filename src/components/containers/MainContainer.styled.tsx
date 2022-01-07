import styled from 'styled-components'
import { ContainerWrapper } from './ContainerWrapper.styled'

export const MainContainer = styled(ContainerWrapper)`
   padding: 1rem 0 0;
   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      padding-top: 2.3rem;
   }
`
