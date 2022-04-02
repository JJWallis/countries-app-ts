import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropDownResult = styled(Link)`
   display: block;
   width: 100%;
   padding-block: 0.5rem;
   &:hover {
      text-decoration: underline;
   }
   &:focus {
      outline: 1px dotted #fff;
   }
`
