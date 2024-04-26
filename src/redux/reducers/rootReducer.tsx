import { combineReducers } from '@reduxjs/toolkit'
import fetchMapData from '../actions/fetchMapData'
import LocationReducer from './locationReducer'

const rootReducer = combineReducers({
  location: LocationReducer,
  map: fetchMapData,
})

export default rootReducer
