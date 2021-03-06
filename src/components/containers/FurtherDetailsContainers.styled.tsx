import styled from 'styled-components'

export const FurtherDetailsParent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3.5rem;
   @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
      flex-direction: row;
   }
`

export const FurtherDetailsChild = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1 100%;
`

export const FurtherDetailsColumns = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: baseline;
   gap: 3.1rem;
   @media (min-width: ${({ theme }) => theme.furtherBreakpoint}) {
      gap: 6rem;
   }
`

export const FurtherDetailsColumnsChild = styled.article`
   flex: 1 220px;
   max-width: 300px;
   @media (min-width: ${({ theme }) => theme.breakpoint}) {
      flex-basis: 100px;
   }
`
