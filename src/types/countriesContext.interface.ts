export type CountryData = Country[] | null

export interface Country {
   name: { common: string; nativeName: { official: string }[] }
   cioc: string
   cca3: string
   region: string
   borders: string[]
   flags: {
      svg: string
   }
   currencies: { name: string }[]
   languages: string[]
   population: number
   subregion: string
   capital: string
   tld: string[]
}

export interface ContextInterface {
   countries: CountryData
   countriesError: boolean
}

export const CountryMockTest = [
   {
      name: { common: 'hi', nativeName: [{ official: 'hi' }] },
      cioc: 'hi',
      cca3: 'hi',
      region: 'hi',
      borders: ['hi'],
      flags: {
         svg: 'hi',
      },
      currencies: [{ name: 'hi' }],
      languages: ['hi'],
      population: 10,
      subregion: 'hi',
      capital: 'hi',
      tld: ['hi'],
   },
]
