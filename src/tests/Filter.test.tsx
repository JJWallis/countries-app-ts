import React from 'react'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'
import Filter from '../components/Filter'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const prevFilter = jest.fn()
   const { getByRole } = render(
      <Filter prevFilter="" updatePrevFilter={prevFilter} />
   )
})
