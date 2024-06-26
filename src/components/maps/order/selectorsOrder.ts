/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from '@reduxjs/toolkit'
import { InputCityProps, InputRatesDate } from '../../../interface/Interface'

export const selectLocation = (state: { location: InputCityProps }) =>
  state.location

export const selectRentalDate = (state: { rentalDate: InputRatesDate }) =>
  state.rentalDate

export const getOrderInfo = createSelector(
  [selectLocation, selectRentalDate],
  (rentalDate, location) => ({
    rentalDate,
    location,
  }),
)
