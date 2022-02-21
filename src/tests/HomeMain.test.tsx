import React from 'react'
import { countriesRender } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import HomeMain from '../routes/HomeMain'

test('loading title displays on initial render', () => {
   const providerProps = {
      countries: null,
      countriesError: false,
   }
   const { getByRole, getAllByRole } = countriesRender(<HomeMain />, {
      providerProps,
   })
   const heading = getByRole('heading')

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent('Loading...')
   expect(getAllByRole('heading')).toHaveLength(1)

   getByRole('')
})

test('valid country data displayed correctly', () => {
   const providerProps = {
      countries: CountryMockTest,
      countriesError: false,
   }
   const { getByRole, queryByText, getAllByRole } = countriesRender(
      <HomeMain />,
      {
         providerProps,
      }
   )
   const link = getByRole('link')
   const article = getByRole('article')
   const heading = getByRole('heading')

   expect(queryByText('Loading...')).toBeNull()

   expect(link).toBeInTheDocument()
   expect(link).toHaveAttribute('href', '/details/hi')

   expect(article).toBeInTheDocument()
   expect(article).toHaveAttribute('id') // accessibility - links to aria-controls in Filter.tsx

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent('hi')
   expect(getAllByRole('heading')).toHaveLength(1)
})

// expect(screen.getByText('Loading...')).toBeInTheDocument()
// expect(await screen.findByRole('heading')).toHaveTextContent(
//    'Country data could not be retrieved. Please reload & try again.'
// )
