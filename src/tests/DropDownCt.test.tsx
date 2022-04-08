import React from 'react'
import { render } from './test-utils'
import DropDownCt from '../components/DropDownCt'
import '@testing-library/jest-dom/extend-expect'

test('drop down container renders invisible on mount', () => {
   const { getByRole, getByTestId } = render(
      <DropDownCt testId="drop-down-ct" toggled={false} styleProp="filter" />
   )
   const container = getByTestId('drop-down-ct')

   expect(container).toBeInTheDocument()
   expect(container).toHaveStyle('opacity: 0')

   getByRole('')
})
