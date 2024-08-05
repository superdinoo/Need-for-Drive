/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from '@reduxjs/toolkit'

export const selectModalTotal = (state: {
  modalTotal: { activeButtonModal: any }
}) => state.modalTotal.activeButtonModal

export const selectPostIdorderCar = (state: {
  modalTotal: { postIdOrderCar: { id: number } }
}) => state.modalTotal.postIdOrderCar.id

export const selectIdOrder = (state: { modalTotal: { activeIdOrder: any } }) =>
  state.modalTotal.activeIdOrder

export const getActiveButton = createSelector(
  [selectModalTotal, selectPostIdorderCar, selectIdOrder],
  (activeButtonModal, postIdOrderCar, activeIdOrder) => ({
    activeButtonModal,
    postIdOrderCar,
    activeIdOrder,
  }),
)
