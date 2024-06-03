/* eslint-disable no-shadow */
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

enum EPath {
  '/' = '/LocationPage',
  '/LocationPage' = '/ModelCar',
  '/ModelCar' = '/Additionally',
  '/Additionally' = '/Total',
}

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({
  currentPages,
  activeCar,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)
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

  let nextPath = EPath['/']

  if (cityAndPoint) {
    nextPath = EPath['/LocationPage']
  }
  if (cityAndPoint && activeCarConst) {
    nextPath = EPath['/ModelCar']
  }
  if (cityAndPoint && activeCarConst && startEnd && color && rate) {
    nextPath = EPath['/Additionally']
  }

  const namesBtn: NamesBtn = {
    '/LocationPage': 'Выбрать модель',
    '/ModelCar': 'Дополнительно',
    '/Additionally': 'Итого',
    '/Total': 'Заказать',
  }

  const handleDisabled = () => {
    if (cityAndPoint || activeCarConst || startEnd || color || rate)
      setDisabled(!disabled)
  }

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
          disabled={handleDisabled}
          className={`btnOrder ${
            cityAndPoint || activeCarConst ? 'btnOrderTrue' : ''
          }`}
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
