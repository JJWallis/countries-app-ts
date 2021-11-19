import styled, { css } from 'styled-components'

type Props = {
   align?: boolean
   spacing?: boolean
   sb?: boolean
   sf?: boolean
   grid?: boolean
   country?: boolean
   countryData?: boolean
   reset?: boolean
   flexWrap?: boolean
   flexChild?: boolean
   display?: 'grid' | 'flexWrap'
   border?: boolean
}

export default styled.div<Props>`
   ${({ align }) =>
      align &&
      css`
         margin: 0 auto;
         width: 90%;
         max-width: 1500px;
      `}

   ${({ spacing }) =>
      spacing &&
      css`
         padding-block: 1rem;
      `}

   ${({ reset }) =>
      reset &&
      css`
         margin: unset;
         width: unset;
         max-width: unset;
         padding-block: unset;
         display: flex;
         justify-content: flex-end;
         position: relative;
         &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            width: 40px;
            height: 48px;
            background-color: ${(props) => props.theme.elements};
            pointer-events: none;
            border-radius: 5px;
         }
         &::after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            width: 0;
            height: 0;
            border-left: 7px dashed transparent;
            border-right: 7px dashed transparent;
            border-top: 7px dashed white;
            pointer-events: none;
         }
      `}

   ${({ sb }) =>
      sb &&
      css`
         display: flex;
         justify-content: space-between;
         align-items: center;
      `}

   ${({ sf }) =>
      sf &&
      css`
         margin: 1rem 0;
         width: 100%;
         @media (max-width: 700px) {
            flex-direction: column;
            justify-content: unset;
            align-items: flex-start;
         }
      `}

     
      
      ${({ display }) =>
      display === 'grid' &&
      css`
         display: grid;
         width: 100%;
         grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
         grid-template-rows: auto;
         grid-auto-rows: auto;
         grid-gap: 4rem;
      `}

      ${({ display }) =>
      display === 'flexWrap' &&
      css`
         display: flex;
         flex-wrap: wrap;
         gap: 3rem;
      `}

      ${({ country }) =>
      country &&
      css`
         border-radius: 5px;
         box-shadow: ${(props) => props.theme.shadow};
         padding: 0 0 1rem 0;
         overflow: hidden;
         background-color: ${(props) => props.theme.elements};
         cursor: pointer;
         transition: transform 200ms linear;
         &:hover {
            transform: scale(1.1);
         }
      `}

      ${({ countryData }) =>
      countryData &&
      css`
         margin: 0;
         width: 100%;
         padding: 0;
      `}

      ${({ flexChild }) =>
      flexChild &&
      css`
         flex: 1 300px;
      `}

      ${({ border }) =>
      border &&
      css`
         margin: 0;
      `}
`
