import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CountriesProvider } from '../context/countriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'
import { lightTheme } from '../components/styled/Theme'
import { Country, CountryMockTest } from '../types/countriesContext.interface'

const AllTheProviders: FC = ({ children }) => {
   const handleFilterRegions = jest.fn()
   return (
      <ThemeProvider theme={lightTheme}>
         <BrowserRouter>
            <CountriesProvider countries={null} countriesError={false}>
               <FilteredRegionsProvider
                  filteredRegions={null}
                  handleFilterRegions={handleFilterRegions}
               >
                  {children}
               </FilteredRegionsProvider>
            </CountriesProvider>
         </BrowserRouter>
      </ThemeProvider>
   )
}

const countriesContextRender = (
   ui: ReactElement,
   {
      providerProps,
      ...renderOptions
   }: {
      providerProps: {
         countries: Country[] | null
         countriesError: boolean
      }
   }
) => {
   return render(
      <BrowserRouter>
         <CountriesProvider {...providerProps}>{ui}</CountriesProvider>,
      </BrowserRouter>,
      renderOptions
   )
}

const filteredContextRender = (
   ui: ReactElement,
   {
      providerProps,
      ...renderOptions
   }: {
      providerProps: {
         filteredRegions: Country[] | null
         handleFilterRegions: (region: string) => void
      }
   }
) => {
   return render(
      <BrowserRouter>
         <FilteredRegionsProvider {...providerProps}>
            <CountriesProvider
               countries={CountryMockTest}
               countriesError={false}
            >
               {ui}
            </CountriesProvider>
         </FilteredRegionsProvider>
         ,
      </BrowserRouter>,
      renderOptions
   )
}

const browserRouterRender = (ui: ReactElement) => {
   return render(<BrowserRouter>{ui}</BrowserRouter>)
}

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
   window.history.pushState({}, 'Test page', route)
   return render(ui, { wrapper: BrowserRouter })
}

const customRender = (
   ui: ReactElement,
   options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { countriesContextRender as countriesRender }
export { browserRouterRender as routerRender }
export { filteredContextRender as filteredRender }
export { renderWithRouter }
