import { createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { selectActiveCar } from 'components/cars/selectors'
import {
  selectLocation,
  selectRentalDate,
} from 'components/maps/order/selectorsOrder'
import {
  selectActivePointColor,
  selectActivePointOptions,
  selectActivePointRate,
  selectActiveRentalPrice,
} from 'components/additionallyPath/selectors'
import { request } from '../api/api'

export const fetchOrderPost = createAsyncThunk(
  'apiSwagger/fetchOrderPost',
  async (_, { rejectWithValue }) => {
    try {
      const carName = useSelector(selectActiveCar)
      const activeCityPoint = useSelector(selectLocation)
      const colorText = useSelector(selectActivePointColor)
      const rateText = useSelector(selectActivePointRate)
      const { start, end } = useSelector(selectRentalDate)
      const { tank, seat, wheel } = useSelector(selectActivePointOptions)
      const price = useSelector(selectActiveRentalPrice)

      const color = Object.keys(colorText).find((key) => colorText[key])
      const rate = Object.keys(rateText).find((key) => rateText[key] === true)

      const startDate = new Date(start).getTime()
      const endDate = new Date(end).getTime()

      return await request(`/api/db/order/`, {
        method: 'POST',
        data: {
          orderStatusId: null,
          cityId: { id: activeCityPoint.cityId, name: activeCityPoint.city },
          pointId: { id: activeCityPoint.pointId, name: activeCityPoint.point },
          carId: { id: carName.id, name: carName.name },
          color,
          dateFrom: startDate,
          dateTo: endDate,
          rateId: { id: rateText.rateId, name: rate },
          price: price.rentalPrice,
          isFullTank: tank,
          isNeedChildChair: seat,
          isRightWheel: wheel,
        },
      })
    } catch (error) {
      return rejectWithValue('Ошибка при отправке данных')
    }
  },
)

export default fetchOrderPost
