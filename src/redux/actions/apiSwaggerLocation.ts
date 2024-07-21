import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import {
  CarApi,
  CarCategory,
  City,
  ApiSwaggerState,
  Point,
  Rate,
} from '../../interface/Interface'
import { RootState } from '../rootState'

type ThunkType = AsyncThunk<
  City[] | Point[] | Rate[] | CarApi[] | CarCategory[],
  string | void | undefined,
  { state: RootState }
>

const apiSwaggerLocation =
  (
    thunk: ThunkType,
    paramName: 'cities' | 'points' | 'rate' | ' carsAll' | 'categoryCars',
  ) =>
  (builder: ActionReducerMapBuilder<ApiSwaggerState>) => {
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
