import React from 'react'
import Header from '../components/Header'
import { render, Matcher, MatcherOptions } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
let getTestById: (
   text: Matcher,
   options?: MatcherOptions | undefined,
   waitForElementOptions?: unknown
) => HTMLElement

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
