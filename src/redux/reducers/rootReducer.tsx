import { combineReducers } from '@reduxjs/toolkit'
import locationReducer from './locationReducer'
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  map: mapReducer,
})

export default rootReducer
