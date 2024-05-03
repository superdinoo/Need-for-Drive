import { createReducer } from '@reduxjs/toolkit'
import setLocation from '../actions/setLocation '

const initialState = {
  city: '',
  point: '',
}

const locationReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLocation, (state, action) => {
    return {
      ...state,
      city: action.payload.city,
      point: action.payload.point,
    }
  })
})

export default locationReducer
