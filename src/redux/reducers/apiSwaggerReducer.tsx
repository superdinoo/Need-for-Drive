import { createSlice } from '@reduxjs/toolkit'
import { ApiSwaggerState } from '../../interface/Interface'
import apiSwaggerLocation from '../actions/apiSwaggerLocation'
import {
  fetchCarApi,
  fetchCategory,
  fetchCities,
  fetchOrderPost,
  fetchPoints,
  fetchRateDate,
} from '../thunks'

const initialState: ApiSwaggerState = {
  cities: [],
  points: [],
  rate: [],
  carsAll: [],
  categoryCars: [],
  orderPost: [],
  getId: [],
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
    apiSwaggerLocation(fetchOrderPost, 'orderPost')(builder)
  },
})

export default apiSwaggerSlice.reducer
