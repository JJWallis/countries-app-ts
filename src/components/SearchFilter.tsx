import React, { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useFurtherDetailsContext } from '../hooks/useFurtherDetailsContext'
import { SearchFilterContainer } from './containers/SearchFilterContainer.styled'
import Search from './Search'
import Filter from './Filter'
import Button from './styled/StyledButton'
import Icon from './styled/Icon'

const SearchFilter: React.FC = () => {
   const { furtherDetails, setFurtherDetails } = useFurtherDetailsContext()
   const prevFilter = useRef('')

   const updatePrevFilter = (filter: string) => (prevFilter.current = filter)

   const handleLayoutChange = () => {
      return !furtherDetails ? (
         <>
            <Search />
            <Filter
               prevFilter={prevFilter.current}
               updatePrevFilter={updatePrevFilter}
            />
         </>
      ) : (
         <>
            <Button back onClick={() => setFurtherDetails(null)}>
               Back
            </Button>
            <Icon
               arrow
               aria-hidden="true"
               focusable="false"
               viewBox="0 0 448 512"
            >
               <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </Icon>
         </>
      )
   }

   // return <SearchFilterContainer>{handleLayoutChange()}</SearchFilterContainer>
   return (
      <>
         <Search />
         <Filter
            prevFilter={prevFilter.current}
            updatePrevFilter={updatePrevFilter}
         />
         <Link to="/home">home</Link>
         <Link to="/details">details</Link>
         <Outlet />
      </>
   )
}

export default SearchFilter
