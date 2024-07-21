import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'

const getCategoryCars = (state: RootState) => state.apiSwagger.categoryCars

const helpersBreadCrambsCar = createSelector(
  [getCategoryCars],
  (categoryCars) =>
    categoryCars.map((categoryItem) => ({
      text: categoryItem.name,
      marker: categoryItem.name,
      id: categoryItem.id,
    })),
)

export default helpersBreadCrambsCar
