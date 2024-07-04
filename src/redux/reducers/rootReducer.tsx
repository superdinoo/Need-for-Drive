import { combineReducers } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
import mapReducer from './mapReducer'
import carSlice from './carSlice'
import additionallySlice from './additionallySlice'
import rentalDateReducer from './rentalDateReducer'
import modalTotalSlice from './modalTotalSlice'
import apiSwaggerReducer from './apiSwaggerReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  map: mapReducer,
  car: carSlice,
  additionally: additionallySlice,
  rentalDate: rentalDateReducer,
  modalTotal: modalTotalSlice,
  apiSwagger: apiSwaggerReducer,
})

export default rootReducer
