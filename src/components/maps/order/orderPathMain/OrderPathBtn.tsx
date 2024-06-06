import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectLocation, selectRentalDate } from '../selectorsOrder'
import { OrderProps, NamesBtn } from '../../../../interface/Interface'
import {
  selectActivePointColor,
  selectActivePointRate,
} from '../../../additionallyPath/selectors'
import ModalTotal from '../../../totalPath/ModalTotal'
import { nextPathLoc } from './helpers'

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({
  currentPages,
  activeCar,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { start, end } = useSelector(selectRentalDate)
  const { any, red, blue } = useSelector(selectActivePointColor)
  const { everyMinute, forADay } = useSelector(selectActivePointRate)
  const { city, point } = useSelector(selectLocation)
  const { pathname } = useLocation()

  const cityAndPoint = city.length > 0 && point.length > 0
  const activeCarConst = activeCar.name.length > 0
  const startEnd = start.length > 0 && end.length > 0
  const color = any === true || red === true || blue === true
  const rate = everyMinute === true || forADay === true

  const namesBtn: NamesBtn = {
    '/LocationPage': 'Выбрать модель',
    '/ModelCar': 'Дополнительно',
    '/Additionally': 'Итого',
    '/Total': 'Заказать',
  }

  const routeData = {
    pathname,
    cityAndPoint,
    activeCarConst,
    startEnd,
    color,
    rate,
  }

  const { nextPath, isActive } = nextPathLoc(routeData)

  const handleOrderClick = () => {
    if (currentPages === 'totalPages') {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div className="btnContainerOrder">
      <Link to={nextPath} className="linkOrder" onClick={handleOrderClick}>
        <button
          type="button"
          className={`btnOrder ${isActive ? 'btnOrderTrue' : ''}`}
        >
          {namesBtn[pathname] ?? ''}
        </button>
      </Link>

      {isModalOpen && (
        <div className="modalOverlay">
          <ModalTotal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default OrderPathBtn
