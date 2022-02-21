import React from 'react'
import { countriesRender } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import HomeMain from '../routes/HomeMain'

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

   getByRole('')
})

// test('displays error message on unsuccessful data fetch', async () => {
//    const axiosReq = axios as jest.Mocked<typeof axios>
//    axiosReq.get.mockImplementationOnce(() => Promise.reject(new Error()))
//    render(<HomeMain />)
//    // screen.debug()
//    // expect(screen.getByText('Loading...')).toBeInTheDocument()
//    // expect(await screen.findByRole('heading')).toHaveTextContent(
//    //    'Country data could not be retrieved. Please reload & try again.'
//    // )
// })
