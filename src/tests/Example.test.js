import { fns } from '../tests/Example'

jest.mock('../tests/Example')

it('random number function works', () => {
   jest.spyOn(fns, 'random')
   const result = fns.random()
   expect(result).toEqual(0)
   expect(fns.random).toHaveBeenCalledTimes(1)

   // chooseWord

   fns.random.mockReset()
})
