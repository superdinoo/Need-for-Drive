import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import { City, LocationsState, Point } from '../../interface/Interface'
import { RootState } from '../rootState'

type ThunkType = AsyncThunk<City[] | Point[], string, { state: RootState }>

const apiSwaggerLocation =
  (thunk: ThunkType, paramName: 'cities' | 'points') =>
  (builder: ActionReducerMapBuilder<LocationsState>) => {
    builder
      .addCase(thunk.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(thunk.fulfilled, (state, { payload }) => ({
        ...state,
        [paramName]: payload,
        isLoading: false,
      }))
      .addCase(thunk.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }))
  }

export default apiSwaggerLocation
