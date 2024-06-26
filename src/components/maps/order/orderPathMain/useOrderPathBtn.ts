/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  selectActivePointColor,
  selectActivePointRate,
} from 'components/additionallyPath/selectors'
import { selectModalTotal } from 'components/totalPath/selectorsModalTotal'
import { selectLocation, selectRentalDate } from '../selectorsOrder'
import apiSwaggerTotalPath from '../../../totalPath/apiSwaggerTotalPath'
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

const useOrderPathBtn = (currentPages: string) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { start, end } = useSelector(selectRentalDate)
  const activeColor = useSelector(selectActivePointColor)
  const activeRate = useSelector(selectActivePointRate)
  const { city, point } = useSelector(selectLocation)
  const { confirm } = useSelector(selectModalTotal)
  const { fetchOrderPost } = apiSwaggerTotalPath()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const colorTrue = Object.keys(activeColor).find((key) => activeColor[key])
  const rateTrue = Object.keys(activeRate).find((key) => activeRate[key])

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

  const memoizedFetchOrderPost = useCallback(() => {
    fetchOrderPost()
  }, [])

  useEffect(() => {
    if (confirm === true) {
      memoizedFetchOrderPost()
    }
  }, [confirm, memoizedFetchOrderPost])

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
  }
}

export default useOrderPathBtn
