import { combineReducers } from '@reduxjs/toolkit'
import LocationReducer from './LocationReducer'

const rootReducer = combineReducers({
  location: LocationReducer,
})

export default rootReducer
