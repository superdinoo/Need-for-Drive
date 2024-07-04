import { createSlice } from '@reduxjs/toolkit'
import { LocationsState } from '../../interface/Interface'
import apiSwaggerLocation from '../actions/apiSwaggerLocation'
import {
  fetchCarApi,
  fetchCategory,
  fetchCities,
  fetchPoints,
  fetchRateDate,
} from '../thunks/thunksLocation'

const initialState: LocationsState = {
  cities: [],
  points: [],
  rate: [],
  carsAll: [],
  categoryCars: [],
  isLoading: false,
  error: null,
}

const apiSwaggerSlice = createSlice({
  name: 'apiSwagger',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    apiSwaggerLocation(fetchCities, 'cities')(builder)
    apiSwaggerLocation(fetchPoints, 'points')(builder)
    apiSwaggerLocation(fetchRateDate, 'rate')(builder)
    apiSwaggerLocation(fetchCarApi, 'carsAll')(builder)
    apiSwaggerLocation(fetchCategory, 'categoryCars')(builder)
  },
})

export default apiSwaggerSlice.reducer
