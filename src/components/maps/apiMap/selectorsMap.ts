import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'

const selectMapCenter = (state: RootState) => state.map.center
const selectMapPoint = (state: RootState) => state.map.address

const getMapInfo = createSelector(
  [selectMapCenter, selectMapPoint],
  (mapCenter, mapPoint) => ({
    mapCenter,
    mapPoint,
  }),
)

export default getMapInfo
