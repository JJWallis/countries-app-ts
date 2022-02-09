import { Country } from './countriesContext.interface'
import { DataToMap } from './FurtherMain.interface'

export interface FurtherDetailsProps {
   data: Country
   printFlag: () => JSX.Element
   printData: (data: DataToMap) => JSX.Element
}
