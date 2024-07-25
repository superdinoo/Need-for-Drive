import React from 'react'
import { Link } from 'react-router-dom'
import { OrderProps, NamesBtn } from '../../../../interface/Interface'
import ModalTotal from '../../../totalPath/ModalTotal'
import { nextPathLoc } from './helpers'
import useOrderPathBtn from './useOrderPathBtn'

const OrderPathBtn: React.FC<OrderProps & NamesBtn> = ({
  currentPages,
  activeCar,
}) => {
  const {
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
  } = useOrderPathBtn(currentPages)

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
