import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'

const fetchCarApi = createAsyncThunk(
  'locations/fetchCarApi',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/car`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке машин')
    }
  },
)

export default fetchCarApi
