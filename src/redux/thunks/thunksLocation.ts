import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'

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
