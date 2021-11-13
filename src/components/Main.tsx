import React from 'react'
// import { Context } from '../App'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import SearchFilter from './SearchFilter'
import Countries from './CountriesContainer'

const Main: React.FC = () => {
   // const { homepage } = { ...useContext(Context) }
   // const scrollRef = useRef<number | null>(null)

   // useEffect(() => {
   //    if (!homepage) {
   //       // check if changed before assigning
   //       scrollRef.current = window.scroll
   //    } else {
   //       if (scrollRef.current) {
   //          window.scroll({ top: scrollRef.current })
   //          console.log(scrollRef.current)
   //       }
   //    }
   // }, [homepage])

   return (
      <StyledMain>
         <Wrapper>
            <SearchFilter />
            <Countries />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
