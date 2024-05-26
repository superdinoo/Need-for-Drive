import { createReducer } from '@reduxjs/toolkit'
import setRatesDate from '../actions/setRentalDate'

const initialState = {
  start: '',
  end: '',
}

const rentalDateReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRatesDate, (state, action) => {
    return {
      ...state,
      start: action.payload.start,
      end: action.payload.end,
    }
  })
})

export default rentalDateReducer
