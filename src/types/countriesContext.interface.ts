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
