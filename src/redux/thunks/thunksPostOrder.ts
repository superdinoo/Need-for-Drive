import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../api/api'
import { OrderPost } from '../../interface/Interface'
import { setPostIdOrderCar } from '../reducers/modalTotalSlice'
import fetchGetId from './thunksGetOrderId'

export const fetchOrderPost = createAsyncThunk(
  'apiSwagger/fetchOrderPost',
  async (orderData: OrderPost, { rejectWithValue, dispatch }) => {
    try {
      const response = await request('/api/db/order', {
        method: 'POST',
        data: orderData,
      })
      dispatch(setPostIdOrderCar({ id: response.id }))
      return dispatch(fetchGetId(response.id))
    } catch (error) {
      return rejectWithValue('Ошибка при отправке данных')
    }
  },
)

export default fetchOrderPost
