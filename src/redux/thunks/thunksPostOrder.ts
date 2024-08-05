import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'
import { OrderPost } from '../../interface/Interface'

export const fetchOrderPost = createAsyncThunk(
  'apiSwagger/fetchOrderPost',
  async (orderData: OrderPost, { rejectWithValue }) => {
    try {
      const response = await request('/api/db/order', {
        method: 'POST',
        data: orderData,
      })
      return response
    } catch (error) {
      return rejectWithValue('Ошибка при отправке данных')
    }
  },
)

export default fetchOrderPost
