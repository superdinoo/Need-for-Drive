import React from 'react'
import { useLocation } from 'react-router-dom'
import { OrderProps } from 'interface/Interface'
import { useSelector } from 'react-redux'
import {
  getAdditionallyInfo,
  selectActivePointOptions,
} from '../../../additionallyPath/selectors'
import { selectRentalDate } from '../selectorsOrder'
import { calculater } from './helpers'

const OrderPathPrice: React.FC<OrderProps> = ({ activeCar }) => {
  const { start, end } = useSelector(selectRentalDate)
  const { pathname } = useLocation()
  const activeOptions = useSelector(selectActivePointOptions)
  const { activePointRate } = useSelector(getAdditionallyInfo)

  const startDatePrice = new Date(start)
  const endDatePrice = new Date(end)

  const rentalPrice = calculater(
    startDatePrice,
    endDatePrice,
    activeOptions,
    activePointRate,
  )

  return (
    <div className="priceOrderContainer">
      <h3 className="priceOrder">Цена: </h3>
      <p className="priceOrderWidth">
        {pathname === '/Additionally' || pathname === '/Total'
          ? `${rentalPrice} ₽`
          : `${activeCar.priceMin} ₽`}
      </p>
    </div>
  )
}

export default OrderPathPrice
