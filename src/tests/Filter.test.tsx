import React from 'react'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'
import Filter from '../components/Filter'
import '@testing-library/jest-dom/extend-expect'

test('HTML renders correctly & semantically', () => {
   const prevFilter = jest.fn()
   const { getByRole, getAllByRole } = render(
      <Filter prevFilter="" updatePrevFilter={prevFilter} />
   )
   const btnTitle = getByRole('button', { name: /Filter by region/i })
   const btnOption = getByRole('button', { name: /hi/i })
   const btns = getAllByRole('button')

   expect(btns).toHaveLength(2)
   expect(btns.map((button) => button.getAttribute('aria-controls'))).toEqual([
      'country-information',
      'country-information',
   ])

   expect(btnTitle).toBeInTheDocument()
   expect(btnOption).toBeInTheDocument()
   expect(btnOption).toHaveAttribute('aria-selected', 'false')

   getByRole('')
})
