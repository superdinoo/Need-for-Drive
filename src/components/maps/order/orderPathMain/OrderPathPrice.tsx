import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { OrderProps } from 'interface/Interface'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAdditionallyInfo,
  selectActivePointOptions,
} from '../../../additionallyPath/selectors'
import { selectRentalDate } from '../selectorsOrder'
import { calculater } from './helpers'
import { setRentalPrice } from '../../../../redux/reducers/additionallySlice'
import { selectActiveCar } from '../../../cars/selectors'
import { selectPostIdorderCar } from '../../../totalPath/selectorsModalTotal'

const OrderPathPrice: React.FC<OrderProps> = ({ activeCar }) => {
  const dispatch = useDispatch()
  const { start, end } = useSelector(selectRentalDate)
  const { pathname } = useLocation()
  const activeOptions = useSelector(selectActivePointOptions)
  const { activePointRate } = useSelector(getAdditionallyInfo)
  const { priceMin } = useSelector(selectActiveCar)
  const { id } = useSelector(selectPostIdorderCar)

  const startDatePrice = new Date(start)
  const endDatePrice = new Date(end)

  const rentalPrice = calculater(
    startDatePrice,
    endDatePrice,
    activeOptions,
    activePointRate,
    priceMin,
  )

  useEffect(() => {
    dispatch(setRentalPrice({ rentalPrice }))
  }, [rentalPrice, dispatch])

  return (
    <div className="priceOrderContainer">
      <h3 className="priceOrder">Цена: </h3>
      <p className="priceOrderWidth">
        {pathname === '/Additionally' ||
        pathname === '/Total' ||
        pathname === `/Total/${id}`
          ? `${rentalPrice} ₽`
          : `${activeCar.priceMin} ₽`}
      </p>
    </div>
  )
}

export default OrderPathPrice
