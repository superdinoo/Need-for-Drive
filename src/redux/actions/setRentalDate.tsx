import { createAction } from '@reduxjs/toolkit'
import { InputRatesDate } from '../../interface/Interface'

const setRatesDate = createAction<InputRatesDate>('ratesDate/setRatesDate')

export default setRatesDate
