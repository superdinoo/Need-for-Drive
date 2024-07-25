import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'

const fetchCategory = createAsyncThunk(
  'locations/fetchCategory',
  async (_, { rejectWithValue }) => {
    try {
      return await request(`/api/db/category`)
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке категорий')
    }
  },
)

export default fetchCategory
