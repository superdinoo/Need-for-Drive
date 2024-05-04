import { combineReducers } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
import mapReducer from './mapReducer'
import carSlice from './carSlice'
// import additionallySlice from './additionallySlice'

const rootReducer = combineReducers({
  location: locationReducer,
  map: mapReducer,
  car: carSlice,
  // additionally: additionallySlice,
})

export default rootReducer
