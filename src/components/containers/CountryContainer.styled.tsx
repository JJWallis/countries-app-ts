import styled from 'styled-components'

interface Props {
   countryImgFlag: string
}

export const CountryCard = styled.div`
   flex-basis: 310px;
   padding: 0 0 1rem;
   border-radius: 5px;
   box-shadow: ${({ theme }) => theme.countryCardShadow};
   overflow: hidden;
   cursor: pointer;
   background-color: ${({ theme }) => theme.elements};
   transition: transform 200ms linear,
      background-color ${({ theme: { themeTransition } }) => themeTransition},
      box-shadow ${({ theme: { themeTransition } }) => themeTransition};
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