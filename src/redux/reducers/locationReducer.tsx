import { createReducer } from '@reduxjs/toolkit'
import setLocation from '../actions/setLocation '

const initialState = {
  city: '',
  point: '',
  cityId: 0,
  pointId: 0,
}

const locationReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLocation, (state, action) => {
    return {
      ...state,
      city: action.payload.city,
      point: action.payload.point,
      cityId: action.payload.cityId,
      pointId: action.payload.pointId,
    }
  })
})

export default locationReducer
