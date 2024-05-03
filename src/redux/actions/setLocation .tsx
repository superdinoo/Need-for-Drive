import { createAction } from '@reduxjs/toolkit'
import { InputCityProps } from '../../interface/Interface'

const setLocation = createAction<InputCityProps>('location/setLocation')

export default setLocation
