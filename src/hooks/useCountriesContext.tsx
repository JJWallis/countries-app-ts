import { useContext } from 'react'
import { CountriesContext } from '../context/countriesContext'

export function useCountriesContext() {
    const countriesContext = useContext(CountriesContext)
    if (!countriesContext) {
        throw new Error('useCountriesContext must be used within a CountriesContext Provider')
    }
    return countriesContext
}
