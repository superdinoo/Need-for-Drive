/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveCar } from 'components/cars/selectors'
import {
  selectLocation,
  selectRentalDate,
} from 'components/maps/order/selectorsOrder'

import { API_BASE_URL, API_KEY } from 'components/utils'
import {
  selectActivePointColor,
  selectActivePointOptions,
  selectActivePointRate,
  selectActiveRentalPrice,
} from 'components/additionallyPath/selectors'
import { OrderPost } from '../../interface/Interface'
import {
  setOrderId,
  setPostIdOrderCar,
} from '../../redux/reducers/modalTotalSlice'

const apiSwaggerTotalPath = () => {
  const dispatch = useDispatch()
  const [orderPost, setOrderPost] = useState<OrderPost[]>([])
  const [orderGet, setOrderGet] = useState<OrderPost[]>([])

  const carName = useSelector(selectActiveCar)
  const activeCityPoint = useSelector(selectLocation)
  const colorText = useSelector(selectActivePointColor)
  const rateText = useSelector(selectActivePointRate)
  const { start, end } = useSelector(selectRentalDate)
  const { tank, seat, wheel } = useSelector(selectActivePointOptions)
  const price = useSelector(selectActiveRentalPrice)

  const color = Object.keys(colorText).find((key) => colorText[key])
  const rate = Object.keys(rateText).find((key) => rateText[key] === true)

  const fetchOrderPost = async () => {
    try {
      const startDate = new Date(start).getTime()
      const endDate = new Date(end).getTime()

      const response = await axios.post(
        `${API_BASE_URL}/api/db/order`,
        {
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
        {
          headers: {
            'X-Api-Factory-Application-Id': API_KEY,
            'Content-Type': 'application/json',
          },
        },
      )
      setOrderPost(response.data.data.id)
      dispatch(setPostIdOrderCar({ id: response.data.data.id }))
    } catch (error) {
      console.error('Ошибка при загрузке данных заказа:', error)
    }
  }

  const fetchGetId = async (orderId: string) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/db/order/${orderId}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': API_KEY,
            'Content-Type': 'application/json',
          },
        },
      )
      setOrderGet(response.data.data)
      dispatch(setOrderId(response.data.data))
    } catch (error) {
      console.error('Ошибка при загрузке данных', error)
    }
  }

  return { fetchOrderPost, orderPost, fetchGetId, orderGet }
}

export default apiSwaggerTotalPath
