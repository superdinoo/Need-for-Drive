/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from '@reduxjs/toolkit'
import filteredCars from './carCard/getFilteredCars'

export const selectActivePoint = (state: { car: { activePoint: any } }) =>
  state.car.activePoint

export const selectActiveCar = (state: { car: { activeCar: any } }) =>
  state.car.activeCar

export const getCarInfo = createSelector(
  [selectActivePoint, filteredCars, selectActiveCar],
  (activePoint, filteredCarsResult, activeCar) => ({
    activePoint,
    filterCar: filteredCarsResult,
    activeCar,
  }),
)
