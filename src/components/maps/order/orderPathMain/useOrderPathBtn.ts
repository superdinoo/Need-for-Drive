/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  selectActivePointColor,
  selectActivePointOptions,
  selectActivePointRate,
  selectActiveRentalPrice,
} from 'components/additionallyPath/selectors'
import { selectModalTotal } from 'components/totalPath/selectorsModalTotal'
import { selectLocation, selectRentalDate } from '../selectorsOrder'
import setRatesDate from '../../../../redux/actions/setRentalDate'
import {
  setActivePoint,
  setResetActiveCar,
} from '../../../../redux/reducers/carSlice'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../../redux/reducers/additionallySlice'
import { setResetConfirm } from '../../../../redux/reducers/modalTotalSlice'
import { fetchOrderPost } from '../../../../redux/thunks'
import { selectActiveCar } from '../../../cars/selectors'

const useOrderPathBtn = (currentPages: string) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { start, end } = useSelector(selectRentalDate)
  const activeColor = useSelector(selectActivePointColor)
  const activeRate = useSelector(selectActivePointRate)
  const { city, cityId, pointId, point } = useSelector(selectLocation)
  const carName = useSelector(selectActiveCar)
  const { tank, seat, wheel } = useSelector(selectActivePointOptions)
  const price = useSelector(selectActiveRentalPrice)
  const color = Object.keys(activeColor).find((key) => activeColor[key])
  const rate = Object.keys(activeRate).find((key) => activeRate[key] === true)
  const startDate = new Date(start).getTime()
  const endDate = new Date(end).getTime()
  const { confirm } = useSelector(selectModalTotal)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const colorTrue = Object.keys(activeColor).find((key) => activeColor[key])
  const rateTrue = Object.keys(activeRate).find((key) => activeRate[key])

  const handleSubmit = () => {
    const orderData = {
      orderStatusId: null,
      cityId: { id: cityId, name: city },
      pointId: { id: pointId, name: point },
      carId: { id: carName.id, name: carName.name },
      color,
      dateFrom: startDate,
      dateTo: endDate,
      rateId: { id: activeRate.rateId, name: rate },
      price: price.rentalPrice,
      isFullTank: tank,
      isNeedChildChair: seat,
      isRightWheel: wheel,
    }

    if (confirm) {
      dispatch(fetchOrderPost(orderData))
    }
  }

  const handleOrderClick = () => {
    if (currentPages === 'totalPages') {
      setIsModalOpen(!isModalOpen)
    }
  }

  const handleCancelOrder = () => {
    dispatch(setResetConfirm())
    dispatch(setActiveColor({ colorKey: '', reset: true }))
    dispatch(setActiveRate({ rateKey: '', reset: true, price: 0, id: 0 }))
    dispatch(
      setActiveOptions({
        optionsKey: 'all',
        reset: true,
      }),
    )
    dispatch(
      setRatesDate({
        start: '',
        end: '',
      }),
    )
    dispatch(setResetActiveCar())
    dispatch(setActivePoint({ pointKey: '', reset: true }))
    navigate('/LocationPage')
  }

  return {
    confirm,
    handleCancelOrder,
    handleOrderClick,
    pathname,
    isModalOpen,
    setIsModalOpen,
    colorTrue,
    rateTrue,
    start,
    end,
    city,
    point,
    handleSubmit,
  }
}

export default useOrderPathBtn
