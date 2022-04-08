import React from 'react'
import { render } from './test-utils'
import DropDownCt from '../components/DropDownCt'
import '@testing-library/jest-dom/extend-expect'

test('html renders semantically and correctly', () => {
   const { getByRole, getByTestId } = render(
      <DropDownCt testId="drop-down-ct" toggled={false} styleProp="filter" />
   )
   const container = getByTestId('drop-down-ct')
   expect(container).toBeInTheDocument()
   getByRole('')
})
