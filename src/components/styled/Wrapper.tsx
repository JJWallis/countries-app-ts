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
   max-width: 1200px;
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
         grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
         grid-template-rows: auto;
         grid-auto-rows: auto;
         grid-gap: 4rem;
      `}
      ${(props) =>
      props.country &&
      css`
         border-radius: 5px;
         box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      `}
      ${(props) =>
      props.countryData &&
      css`
         margin: 0;
         width: 100%;
         padding: 0;
      `}
`
