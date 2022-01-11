export type DataToMap =
   | {
        nativeName?: string
        population: number
        region: string
        subRegion: string
        capital: string
     }
   | {
        topLevelDomain?: string[][0]
        currencies?: string
        languages?: string
     }
