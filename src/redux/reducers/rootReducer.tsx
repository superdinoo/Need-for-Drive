import { combineReducers } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
import mapReducer from './mapReducer'
import carSlice from './carSlice'
import additionallySlice from './additionallySlice'
import rentalDateReducer from './rentalDateReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  map: mapReducer,
  car: carSlice,
  additionally: additionallySlice,
  rentalDate: rentalDateReducer,
})

export default rootReducer
