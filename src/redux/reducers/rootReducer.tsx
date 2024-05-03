import { combineReducers } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
import mapReducer from './mapReducer'
// import carSlice from './carSlice'

const rootReducer = combineReducers({
  location: locationReducer,
  map: mapReducer,
  // car: carSlice,
})

export default rootReducer
