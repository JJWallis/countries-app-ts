import React, { useContext, useEffect, useRef, useState } from 'react'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'
import { Context } from '../App'

const Main: React.FC = () => {
   const { homepage } = { ...useContext(Context) }
   const main = useRef<HTMLElement | null>(null)

   useEffect(() => {
      if (main.current) {
         if (!homepage) {
            localStorage.setItem(
               'scroll-offset',
               JSON.stringify(main.current.scrollTop)
            )
         } else {
            // const offset = localStorage.getItem('scroll-offset')
            // if (offset) {
            //    setScrollOffset(JSON.parse(offset))
            //    main.current.scrollTop = scrollOffset
            // }
         }
      }
   }, [homepage])

   return (
      <StyledMain ref={main}>
         <Wrapper>
            <SearchFilter />
            <Countries />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
