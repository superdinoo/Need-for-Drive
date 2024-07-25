import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'

const fetchRateDate = createAsyncThunk(
  'locations/fetchRateDate',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/rate`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке тарифа')
    }
  },
)

export default fetchRateDate
