import { Matcher, MatcherOptions } from '@testing-library/react'

export type GetTestById = (
   text: Matcher,
   options?: MatcherOptions | undefined,
   waitForElementOptions?: unknown
) => HTMLElement
