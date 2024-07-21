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
import {
  setActivePoint,
  setResetActiveCar,
} from '../../../../redux/reducers/carSlice'
import setRatesDate from '../../../../redux/actions/setRentalDate'

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({
  currentPages,
  activeCar,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { start, end } = useSelector(selectRentalDate)
  const activeColor = useSelector(selectActivePointColor)
  const activeRate = useSelector(selectActivePointRate)
  const { city, point } = useSelector(selectLocation)
  const { confirm } = useSelector(selectModalTotal)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const colorTrue = Object.keys(activeColor).find((key) => activeColor[key])
  const rateTrue = Object.keys(activeRate).find((key) => activeRate[key])

  const cityAndPoint = city.length > 0 && point.length > 0
  const activeCarConst = activeCar.name.length > 0
  const startEnd = start.length > 0 && end.length > 0
  const color = colorTrue
  const rate = rateTrue

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
    dispatch(setActiveColor({ colorKey: '', reset: true }))
    dispatch(setActiveRate({ rateKey: '', reset: true, price: 0 }))
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
          <button type="button" className="btnOrder " disabled={!isActive}>
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
