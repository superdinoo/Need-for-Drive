import { createSelector } from '@reduxjs/toolkit'
import { InputCityProps } from '../../../interface/Interface'

export const selectLocation = (state: { location: InputCityProps }) =>
  state.location

export const getOrderInfo = createSelector([selectLocation], (location) => ({
  location,
}))
