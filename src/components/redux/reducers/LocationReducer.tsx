import { createReducer } from '@reduxjs/toolkit'
import setLocation from '../actions/LocationAction'

const initialState = {
  city: '',
  point: '',
}

const LocationReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLocation, (state, action) => {
    return {
      ...state,
      city: action.payload.city,
      point: action.payload.point,
    }
  })
})

export default LocationReducer
