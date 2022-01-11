import { Country } from './countriesContext.interface'
import { DataToMap } from './FurtherMain.interface'

export interface FurtherDetailsProps {
   data: Country | undefined
   printFlag: () => JSX.Element | undefined
   printData: (data: DataToMap) => JSX.Element
}
