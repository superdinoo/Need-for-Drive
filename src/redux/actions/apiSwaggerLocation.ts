/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchCities, fetchPoints } from '../reducers/apiSwaggerReducer'

const apiSwaggerLocation = (thunk: any) => (builder: any) => {
  builder
    .addCase(thunk.pending, (state: any) => {
      const newState = { ...state }
      newState.isLoading = true
      newState.error = null
      return newState
    })
    .addCase(thunk.fulfilled, (state: any, action: any) => {
      const newState = { ...state, isLoading: false }
      if (thunk === fetchCities) {
        newState.cities = action.payload
      } else if (thunk === fetchPoints) {
        newState.points = action.payload
      }
      return newState
    })
    .addCase(thunk.rejected, (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: false,
        error: action.payload as string,
      }
      return newState
    })
}

export default apiSwaggerLocation
