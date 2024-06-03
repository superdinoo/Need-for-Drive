import React from 'react'
import { useLocation } from 'react-router-dom'
import { OrderProps } from 'interface/Interface'
import { useSelector } from 'react-redux'
import {
  getAdditionallyInfo,
  selectActivePointOptions,
} from '../../../additionallyPath/selectors'
import { selectRentalDate } from '../selectorsOrder'

const OrderPathPrice: React.FC<OrderProps> = ({ activeCar }) => {
  const { start, end } = useSelector(selectRentalDate)
  const { pathname } = useLocation()
  const activeOptions = useSelector(selectActivePointOptions)
  const { activePointRate } = useSelector(getAdditionallyInfo)

  const startDatePrice = new Date(start)
  const endDatePrice = new Date(end)

  const colculater = () => {
    const timeDifferenceMs = endDatePrice.getTime() - startDatePrice.getTime()
    let totalPrice = 0

    if (activePointRate.forADay) {
      const hours = timeDifferenceMs / (1000 * 60 * 60)
      const days = hours < 12 ? 1 : Math.ceil(hours / 24)
      totalPrice += days * 1999
    }
    if (activePointRate.everyMinute) {
      const minutes = Math.ceil(timeDifferenceMs / (1000 * 60))
      totalPrice += minutes * 7
    }
    if (activeOptions.tank) {
      totalPrice += 500
    }
    if (activeOptions.seat) {
      totalPrice += 200
    }
    if (activeOptions.wheel) {
      totalPrice += 1600
    }

    return totalPrice
  }

  return (
    <div className="priceOrderContainer">
      <h3 className="priceOrder">Цена: </h3>
      <p className="priceOrderWidth">
        {pathname === '/Additionally' || pathname === '/Total'
          ? `${colculater()} ₽`
          : activeCar.priceCart}
      </p>
    </div>
  )
}

export default OrderPathPrice
