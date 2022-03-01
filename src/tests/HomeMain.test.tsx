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
   expect(heading).toHaveTextContent(/Loading/i)
   expect(getAllByRole('heading')).toHaveLength(1)
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
   expect(link).toHaveAttribute('href', '/details/france')

   expect(article).toBeInTheDocument()
   expect(article).toHaveAttribute('id')

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent(/France/i)
   expect(getAllByRole('heading')).toHaveLength(1)
})

test('invalid data title displays on initial request error', () => {
   const providerProps = {
      countries: null,
      countriesError: true,
   }
   const { getByRole } = countriesRender(<HomeMain />, {
      providerProps,
   })
   const heading = getByRole('heading')

   expect(heading).toBeInTheDocument()
   expect(heading).toHaveTextContent(
      /Country data could not be retrieved. Please reload & try again/i
   )
})
