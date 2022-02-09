import React, { FC } from 'react'
import Search from '../components/Search'

const HomeHeader: FC = ({ children }) => {
   return (
      <>
         <Search />
         {children}
      </>
   )
}

export default HomeHeader
