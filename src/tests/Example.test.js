import { fns } from '../tests/Example'

jest.mock('../tests/Example')

it('should work', () => {
   fns.random()
})
