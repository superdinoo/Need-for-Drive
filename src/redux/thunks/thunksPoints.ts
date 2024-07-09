import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'

const fetchPoints = createAsyncThunk(
  'locations/fetchPoints',
  async (query: string, { rejectWithValue }) => {
    try {
      return await request(`/api/db/point?q=${query}`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке пунктов выдачи')
    }
  },
)

export default fetchPoints
