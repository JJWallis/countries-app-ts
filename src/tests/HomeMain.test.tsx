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

   const { getByRole, findAllByRole, queryByText, findByRole } =
      countriesRender(<HomeMain />, { providerProps })
   getByRole('')

   expect(queryByText('Loading...')).toBeNull()
   // expect(await findByRole('link')).toHaveAttribute('href')
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
