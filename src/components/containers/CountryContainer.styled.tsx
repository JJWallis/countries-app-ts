import styled from 'styled-components'

interface Props {
   countryImgFlag: string
}

export const CountryContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 3.5rem 5rem;
   @media (min-width: 1250px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      justify-content: unset;
      gap: 6rem 6rem;
   }
`

export const CountryCard = styled.div`
   flex-basis: 310px;
   padding: 0 0 1rem;
   border-radius: 5px;
   box-shadow: ${({ theme }) => theme.countryCardShadow};
   overflow: hidden;
   cursor: pointer;
   background-color: ${({ theme }) => theme.elements};
   transition: transform 200ms linear;
   &:hover {
      transform: scale(1.05);
   }
`

export const CountryImageContainer = styled.div<Props>`
   background-image: url(${({ countryImgFlag }) => countryImgFlag});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   min-height: 12rem;
`
