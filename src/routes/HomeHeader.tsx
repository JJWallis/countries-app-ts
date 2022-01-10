import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

interface Props {
   prevFilter: React.MutableRefObject<string>
   updatePrevFilter: (filter: string) => string
}

const HomeHeader: React.FC<Props> = ({ prevFilter, updatePrevFilter }) => {
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
