import { combineReducers } from '@reduxjs/toolkit'
import LocationReducer from './LocationReducer'
import PageReducer from './PageReducer'

const rootReducer = combineReducers({
  location: LocationReducer,
  page: PageReducer,
})

export default rootReducer
