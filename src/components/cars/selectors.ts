/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSelector } from '@reduxjs/toolkit'

export const selectActivePoint = (state: { car: { activePoint: any } }) =>
  state.car.activePoint

export const selectFilterCar = (state: { car: { filterCar: any } }) =>
  state.car.filterCar

export const selectActiveCar = (state: { car: { activeCar: any } }) =>
  state.car.activeCar

export const getCarInfo = createSelector(
  [selectActivePoint, selectFilterCar, selectActiveCar],
  (activePoint, filterCar, activeCar) => ({
    activePoint,
    filterCar,
    activeCar,
  }),
)
