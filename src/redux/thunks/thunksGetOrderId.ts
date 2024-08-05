import { createAsyncThunk } from '@reduxjs/toolkit'

import { request } from '../api/api'

const fetchGetId = createAsyncThunk(
  'apiSwagger/fetchGetId',
  async (orderId: string, { rejectWithValue }) => {
    try {
      const response = await request(`/api/db/order/${orderId}`)

      return response.data.data
    } catch (error) {
      return rejectWithValue('Ошибка при загрузке данных')
    }
  },
)

export default fetchGetId
