/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from '@reduxjs/toolkit'

export const selectActivePointColor = (state: {
  additionally: { activePointColor: any }
}) => state.additionally.activePointColor

export const selectActivePointRate = (state: {
  additionally: { activePointRate: any }
}) => state.additionally.activePointRate

export const selectActivePointOptions = (state: {
  additionally: { activePointOptions: any }
}) => state.additionally.activePointOptions

export const selectActiveRentalPrice = (state: {
  additionally: { activeRentalPrice: any }
}) => state.additionally.activeRentalPrice

export const getAdditionallyInfo = createSelector(
  [
    selectActivePointColor,
    selectActivePointRate,
    selectActivePointOptions,
    selectActiveRentalPrice,
  ],
  (
    activePointColor,
    activePointRate,
    activePointOptions,
    activeRentalPrice,
  ) => ({
    activePointColor,
    activePointOptions,
    activePointRate,
    activeRentalPrice,
  }),
)
