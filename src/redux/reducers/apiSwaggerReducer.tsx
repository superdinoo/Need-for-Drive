import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'
import { LocationsState } from '../../interface/Interface'
import apiSwaggerLocation from '../actions/apiSwaggerLocation'

const initialState: LocationsState = {
  cities: [],
  points: [],
  isLoading: false,
  error: null,
}

export const fetchCities = createAsyncThunk(
  'locations/fetchCities',
  async (query: string, { rejectWithValue }) => {
    try {
      return await request(`/api/db/city?q=${query}`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке городов')
    }
  },
)

export const fetchPoints = createAsyncThunk(
  'locations/fetchPoints',
  async (query: string, { rejectWithValue }) => {
    try {
      return await request(`/api/db/point?q=${query}`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке пунктов выдачи')
    }
  },
)

const apiSwaggerSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    apiSwaggerLocation(fetchCities)(builder)
    apiSwaggerLocation(fetchPoints)(builder)
  },
})

export default apiSwaggerSlice.reducer
