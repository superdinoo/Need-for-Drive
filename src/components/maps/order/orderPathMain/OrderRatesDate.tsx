import React from 'react'
import { useSelector } from 'react-redux'
import { selectRentalDate } from '../selectorsOrder'
import { calculaterDay } from './helpers'

const OrderRatesDate: React.FC = () => {
  const { start, end } = useSelector(selectRentalDate)

  const startDate = new Date(start)
  const endDate = new Date(end)

  const { differenceInDays, differenceInHours } = calculaterDay(
    startDate,
    endDate,
  )
  return (
    <div className="textOrderContainer">
      <p className="txtOrder">Длительность аренды</p>
      <div className="adressOrder">
        <p className="cityOrder">
          {differenceInDays}д {differenceInHours}ч
        </p>
      </div>
    </div>
  )
}

export default OrderRatesDate
