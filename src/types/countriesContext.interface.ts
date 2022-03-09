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
      name: { common: 'France', nativeName: [{ official: 'French Republic' }] },
      cioc: 'FRA',
      cca3: 'FRA',
      region: 'Europe',
      borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
      flags: {
         svg: 'https://flagcdn.com/fr.svg',
      },
      currencies: [{ name: 'Euro' }],
      languages: ['French'],
      population: 67391582,
      subregion: 'Western Europe',
      capital: 'Paris',
      tld: ['.fr'],
   },
]

export const CountryFilterTest = [
   CountryMockTest,
   {
      name: {
         common: 'Saint Lucia',
         nativeName: [{ official: 'Saint Lucia' }],
      },
      cioc: 'LCA',
      cca3: 'LCA',
      region: 'Americas',
      // borders: [], // may need to make empty arr
      flags: {
         svg: 'https://flagcdn.com/lc.svg',
      },
      currencies: [{ name: 'Euro' }],
      languages: ['French'],
      population: 67391582,
      subregion: 'Western Europe',
      capital: 'Paris',
      tld: ['.fr'],
   },
]
