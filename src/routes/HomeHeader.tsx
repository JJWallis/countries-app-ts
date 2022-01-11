import React, { FC } from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

interface Props {
   prevFilter: React.MutableRefObject<string>
   updatePrevFilter: (filter: string) => string
}

const HomeHeader: FC<Props> = ({ prevFilter, updatePrevFilter }) => {
   return (
      <>
         <Search />
         <Filter
            prevFilter={prevFilter.current}
            updatePrevFilter={updatePrevFilter}
         />
      </>
   )
}

export default HomeHeader
