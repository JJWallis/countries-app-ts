import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CountriesProvider } from '../context/countriesContext'
import { FilteredRegionsProvider } from '../context/filteredRegionsContext'
import { lightTheme } from '../components/styled/Theme'

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

const customRender = (
   ui: ReactElement,
   options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
