/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from '@reduxjs/toolkit'

export const selectModalTotal = (state: {
  modalTotal: { activeButtonModal: any }
}) => state.modalTotal.activeButtonModal

export const getActiveButton = createSelector(
  [selectModalTotal],
  (modalTotal) => ({
    modalTotal,
  }),
)
