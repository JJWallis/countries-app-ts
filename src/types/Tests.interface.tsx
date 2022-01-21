import {
   Matcher,
   MatcherOptions,
   ByRoleMatcher,
   ByRoleOptions,
} from '@testing-library/react'

export type GetTestById = (
   text: Matcher,
   options?: MatcherOptions | undefined,
   waitForElementOptions?: unknown
) => HTMLElement

export type GetByRole = (
   text: ByRoleMatcher,
   options?: ByRoleOptions | undefined,
   waitForElementOptions?: unknown
) => HTMLElement
