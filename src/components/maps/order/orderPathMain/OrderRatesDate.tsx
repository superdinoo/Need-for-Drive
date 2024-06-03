import React from 'react'
import { useSelector } from 'react-redux'
import { selectRentalDate } from '../selectorsOrder'

const OrderRatesDate: React.FC = () => {
  const { start, end } = useSelector(selectRentalDate)

  const startDate = new Date(start)
  const endDate = new Date(end)

  if (!startDate?.getTime() || !endDate?.getTime()) {
    return ''
  }

  const differenceInTime = endDate.getTime() - startDate.getTime()
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))
  const remainingMilliseconds = differenceInTime % (1000 * 3600 * 24)
  const differenceInHours = Math.floor(remainingMilliseconds / (1000 * 3600))

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
