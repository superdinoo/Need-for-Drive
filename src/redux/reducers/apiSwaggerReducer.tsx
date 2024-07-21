import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'
import { LocationsState } from '../../interface/Interface'
import apiSwaggerLocation from '../actions/apiSwaggerLocation'
import { fetchCities, fetchPoints } from '../thunks/thunksLocation'

const initialState: LocationsState = {
  cities: [],
  points: [],
  rate: [],
  isLoading: false,
  error: null,
}

export const fetchRateDate = createAsyncThunk(
  'locations/fetchRateDate',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/rate`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке тарифа')
    }
  },
)

const apiSwaggerSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    apiSwaggerLocation(fetchCities, 'cities')(builder)
    apiSwaggerLocation(fetchPoints, 'points')(builder)
  },
})

export default apiSwaggerSlice.reducer
