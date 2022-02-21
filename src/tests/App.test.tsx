import React from 'react'
import { render } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import { CountryMockTest } from '../types/countriesContext.interface'
import App from '../App'
import axios from 'axios'

// jest.mock('axios')
// const axiosRequest = axios as jest.Mocked<typeof axios>
// const data = Promise.resolve({ data: CountryMockTest })
// axiosRequest.get.mockResolvedValue(data)

// test('countries data API', () => {
//    const { debug } = render(<App />)
//    debug()
// })
