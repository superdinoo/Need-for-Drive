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

export const fetchCarApi = createAsyncThunk(
  'locations/fetchCarApi',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/car`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке машин')
    }
  },
)

export const fetchCategory = createAsyncThunk(
  'locations/fetchCategory',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/category`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке категорий')
    }
  },
)
