import styled from 'styled-components'

export const BordersContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 1rem;
   margin-top: 2.8rem;
   @media (max-width: ${({ theme }) => theme.breakpoint}) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.3rem;
   }
`

export const BorderButtonsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 0.7rem;
`
