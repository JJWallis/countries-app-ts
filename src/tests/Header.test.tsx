import React from 'react'
import Header from '../components/Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { GetTestById } from '../types/Tests.interface'
let getTestById: GetTestById

beforeEach(() => {
   const component = render(
      <Header handleThemeChange={(dark: boolean) => undefined} />
   )
   getTestById = component.getByTestId
})

test('header title renders with correct text', () => {
   const title = getTestById('header-title')
   expect(title).toHaveTextContent('Where in the world?')
})
