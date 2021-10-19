import styled, { css } from 'styled-components'

type Props = {
   sb?: boolean
   sf?: boolean
   hdr?: boolean
   grid?: boolean
   country?: boolean
   countryData?: boolean
}

export default styled.div<Props>`
   margin: 0 auto;
   width: 90%;
   max-width: 1500px;
   padding-block: 1rem;
   ${(props) =>
      props.sb &&
      css`
         display: flex;
         justify-content: space-between;
         align-items: center;
      `}
   ${(props) =>
      props.sf &&
      css`
         margin: 1rem 0;
         width: 100%;
         @media (max-width: 700px) {
            flex-direction: column;
            justify-content: unset;
            align-items: flex-start;
         }
      `}
      ${(props) =>
      props.hdr &&
      css`
         @media (max-width: 700px) {
            width: 100%;
         }
      `}
      ${(props) =>
      props.grid &&
      css`
         display: grid;
         width: 100%;
         grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
         grid-template-rows: auto;
         grid-auto-rows: auto;
         grid-gap: 4rem;
      `}
      ${(props) =>
      props.country &&
      css`
         border-radius: 5px;
         box-shadow: ${(props) => props.theme.shadow};
         padding: 0 0 1rem 0;
         overflow: hidden;
         background-color: ${(props) => props.theme.elements};
      `}
      ${(props) =>
      props.countryData &&
      css`
         margin: 0;
         width: 100%;
         padding: 0;
      `}
`
