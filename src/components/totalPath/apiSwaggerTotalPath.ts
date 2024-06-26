/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
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

interface OrderPost {
  id: 0
  orderStatusId: 0
  cityId: { id: number; name: string }
  pointId: { id: number; name: string }
  carId: { id: number; name: string }
  color: string
  dateFrom: number
  dateTo: number
  rateId: { id: number; name: string }
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}

const apiSwaggerTotalPath = () => {
  const [orderPost, setOrderPost] = useState<OrderPost[]>([])

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

      setOrderPost(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.error('Ошибка при загрузке данных заказа:', error)
    }
  }

  return { fetchOrderPost, orderPost }
}

export default apiSwaggerTotalPath
