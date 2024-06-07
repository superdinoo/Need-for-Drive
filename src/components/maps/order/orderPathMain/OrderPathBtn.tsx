/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { selectLocation, selectRentalDate } from '../selectorsOrder'
import { OrderProps, NamesBtn } from '../../../../interface/Interface'
import {
  selectActivePointColor,
  selectActivePointRate,
} from '../../../additionallyPath/selectors'
import ModalTotal from '../../../totalPath/ModalTotal'
import { nextPathLoc } from './helpers'
import { selectModalTotal } from '../../../totalPath/selectorsModalTotal'
import { setResetConfirm } from '../../../../redux/reducers/modalTotalSlice'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../../../redux/reducers/additionallySlice'
import { setResetActiveCar } from '../../../../redux/reducers/carSlice'

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({
  currentPages,
  activeCar,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { start, end } = useSelector(selectRentalDate)
  const { any, red, blue } = useSelector(selectActivePointColor)
  const { everyMinute, forADay } = useSelector(selectActivePointRate)
  const { city, point } = useSelector(selectLocation)
  const { confirm } = useSelector(selectModalTotal)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  const handleCancelOrder = () => {
    dispatch(setResetConfirm())
    dispatch(
      setActiveColor({ colorKey: 'any' && 'blue' && 'red', reset: true }),
    )
    dispatch(
      setActiveRate({ rateKey: 'everyMinute' && 'forADay', reset: true }),
    )
    dispatch(
      setActiveOptions({
        optionsKey: 'all',
        reset: true,
      }),
    )
    dispatch(setResetActiveCar())

    navigate('/LocationPage')
  }

  return (
    <div className="btnContainerOrder">
      {confirm && (
        <button
          type="button"
          onClick={handleCancelOrder}
          className={`btnOrder ${confirm ? 'btnModalTotal' : ''}`}
        >
          <span>Отменить</span>
        </button>
      )}
      {!confirm && (
        <Link to={nextPath} className="linkOrder" onClick={handleOrderClick}>
          <button
            type="button"
            className={`btnOrder ${isActive ? 'btnOrderTrue' : ''}`}
          >
            {namesBtn[pathname]}
          </button>
        </Link>
      )}

      {!confirm && isModalOpen && (
        <div className="modalOverlay">
          <ModalTotal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default OrderPathBtn
