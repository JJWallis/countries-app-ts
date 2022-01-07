import styled from 'styled-components'

export const SearchFilterContainer = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 1.5rem 0 4rem;
   @media (max-width: ${({ theme }) => theme.breakpoint}) {
      flex-direction: column;
      justify-content: unset;
      align-items: flex-start;
      gap: 3.5rem;
      margin-bottom: 3.5rem;
   }
`
