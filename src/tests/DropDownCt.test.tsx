import React from 'react'
import { render } from './test-utils'
import DropDownCt from '../components/DropDownCt'

test('html renders semantically and correctly', () => {
   const { getByRole } = render(
      <DropDownCt testId="drop-down-ct" toggled={false} styleProp="filter" />
   )
   getByRole('')
})
