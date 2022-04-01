import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { routerRender, renderWithRouter } from './test-utils'
import {
   CountryFilterTest,
   CountryMockTest,
} from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'

jest.mock('axios')

beforeEach(() => {
   window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
         matches: false,
         media: query,
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
      }
   })
})

test('renders correctly pre-successful request', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const {
      getByText,
      findByText,
      getByRole,
      findByRole,
      getAllByRole,
      findAllByRole,
   } = routerRender(<App />)

   expect(getByText(/loading/i)).toBeInTheDocument()
   expect(getByRole('banner')).toBeInTheDocument()
   expect(getByRole('main')).toBeInTheDocument()
   expect(
      getAllByRole('heading').map(({ textContent }) => textContent)
   ).toEqual(['Where in the world?', 'Loading...'])

   expect(await findByText(/loading/i)).not.toBeInTheDocument()

   const countries = await findByRole('article')
   expect(countries).toBeInTheDocument()
   expect(countries).toContainHTML('section')

   const newHeadings = await findAllByRole('heading')
   expect(newHeadings.map(({ textContent }) => textContent)).toEqual([
      'Where in the world?',
      'France',
   ])
})

test('error title displays on unsuccessful request', async () => {
   const consoleMock = jest.spyOn(console, 'error').mockImplementation()
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() => Promise.reject(new Error('')))
   const { getByText, findByText, getByRole, findByRole } = routerRender(
      <App />
   )
   const input = getByRole('textbox')

   expect(getByText(/loading/i)).toBeInTheDocument()
   expect(input).toBeEnabled()

   expect(
      await findByText(
         /country data could not be retrieved. Please reload & try again/i
      )
   ).toBeInTheDocument()
   expect(await findByRole('textbox')).toBeDisabled()
   expect(await findByText(/filter by region/i)).toBeDisabled()
   expect(consoleMock).toHaveBeenCalled()
})

test('theme toggle click changes current theme', () => {
   const { getByRole } = routerRender(<App />)
   const themeToggle = getByRole('checkbox', { name: /theme toggle switch/i })
   const title = getByRole('heading', { name: /Where in the world/i })
   const banner = getByRole('banner')

   expect(title).toHaveStyle('color: rgb(17, 17, 17)')
   expect(banner).toHaveStyle('background-color: rgb(255, 255, 255)')

   userEvent.click(themeToggle)

   expect(themeToggle).toBeChecked()
   expect(title).toHaveStyle('color: #fff')
   expect(banner).toHaveStyle('background-color:   rgb(43, 43, 43)')

   userEvent.click(themeToggle)

   expect(themeToggle).not.toBeChecked()
   expect(title).toHaveStyle('color: rgb(17, 17, 17)')
   expect(banner).toHaveStyle('background-color: rgb(255, 255, 255)')
})

test('details page renders correctly', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const { getByRole, findByRole, queryByRole, getAllByRole, getAllByTestId } =
      routerRender(<App />)

   expect(queryByRole('link')).toBeNull()
   const countryCard = await findByRole('link')
   expect(countryCard).toBeInTheDocument()

   userEvent.click(countryCard)

   const backBtn = getByRole('button', { name: /back/i })
   const flag = getByRole('img', { name: /flag of france/i })
   const links = getAllByRole('link')
   const totalLinks = links.length
   const btns = getAllByRole('button')
   const article = getByRole('article')
   const subTitles = getAllByTestId('country-subtitle')
   const stats = getAllByTestId('country-statistic')

   expect(backBtn).toBeInTheDocument()
   expect(backBtn).toBeEnabled()

   expect(article).toBeInTheDocument()

   expect(flag).toBeInTheDocument()
   expect(flag).toHaveAttribute('src', 'https://flagcdn.com/fr.svg')
   expect(flag).toHaveAccessibleName(/flag of france/i)

   links.map((link) => {
      expect(link).toBeInTheDocument()
      return expect(link).toHaveAttribute('href')
   })

   btns.map((btn) => {
      expect(btn).toBeInTheDocument()
      return expect(btn).toBeEnabled()
   })

   expect(totalLinks).toEqual(btns.length)
   expect(getAllByTestId('border-btn').length).toEqual(totalLinks - 1)

   expect(subTitles.map(({ textContent }) => textContent)).toEqual([
      'Native Name:',
      'Population:',
      'Region:',
      'Sub Region:',
      'Capital:',
      'Top Level Domain:',
      'Currencies:',
      'Languages:',
   ])

   expect(stats.map(({ textContent }) => textContent)).toEqual([
      'Native Name:French Republic',
      'Population:67391582',
      'Region:Europe',
      'Sub Region:Western Europe',
      'Capital:Paris',
      'Top Level Domain:.fr',
      'Currencies:Euro',
      'Languages:French',
   ])

   userEvent.click(backBtn)
})

test('navigation to and from details page functions correctly on card click', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const { getByRole, findByRole, queryByRole } = routerRender(<App />)

   expect(queryByRole('link')).toBeNull()
   const countryCard = await findByRole('link')
   expect(countryCard).toBeInTheDocument()

   userEvent.click(countryCard)

   userEvent.click(getByRole('button', { name: /back/i }))

   expect(queryByRole('button', { name: /back/i })).toBeNull()
})

test('filtering logic functions correctly', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryFilterTest })
   )
   const { getByRole, getAllByRole, findAllByRole, findByRole, queryByRole } =
      routerRender(<App />)

   const countries = await findAllByRole('link')
   const regions = getAllByRole('button')
   const headings = getAllByRole('heading')
   const countryTitles = headings.map(({ textContent }) => textContent)
   const europeRegion = getByRole('button', { name: /europe/i })

   expect(countries).toHaveLength(2)

   regions.map((region) => expect(region).toBeInTheDocument())

   headings.map((title) => expect(title).toBeInTheDocument())

   expect(countryTitles).toEqual([
      'Where in the world?',
      'France',
      'Saint Lucia',
   ])

   userEvent.click(europeRegion)

   await findByRole('link')
   const backToHome = getByRole('button', { name: /back to home/i })

   expect(getByRole('heading', { name: /france/i })).toBeInTheDocument()
   expect(queryByRole('heading', { name: /saint lucia/i })).toBeNull()
   expect(getAllByRole('link')).toHaveLength(1)
   expect(backToHome).toBeInTheDocument()

   userEvent.click(backToHome)

   await findByRole('link')

   userEvent.click(getByRole('button', { name: /americas/i }))

   await findByRole('link')

   expect(getByRole('heading', { name: /saint lucia/i })).toBeInTheDocument()
   expect(queryByRole('heading', { name: /france/i })).toBeNull()
})

test('navigation to and from details page functions correctly on valid search input', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const { getByRole, findByRole } = routerRender(<App />)
   const input = getByRole('textbox')

   await findByRole('link')

   userEvent.type(input, 'france')
   fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

   const backBtn = getByRole('button', { name: /back/i })

   expect(backBtn).toBeInTheDocument()
   expect(getByRole('img', { name: /flag of france/i })).toBeInTheDocument()
})

test('fallback page renders on navigation to invalid route', async () => {
   const axiosRequest = axios as jest.Mocked<typeof axios>
   axiosRequest.get.mockImplementationOnce(() =>
      Promise.resolve({ data: CountryMockTest })
   )
   const { getByRole } = renderWithRouter(<App />, { route: '/invalid' })

   const header = getByRole('banner')
   const title = getByRole('heading', { name: /where in the world/i })
   const themeToggle = getByRole('checkbox')
   const main = getByRole('main')
   const backBtn = getByRole('link', { name: /back/i })

   expect(header).toBeInTheDocument()
   expect(title).toBeInTheDocument()
   expect(themeToggle).toBeInTheDocument()
   expect(main).toBeInTheDocument()

   expect(backBtn).toBeInTheDocument()
   expect(backBtn).toBeEnabled()
})
