import React from 'react'
import './BreadCramb.scss'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectActiveCar } from '../../cars/selectors'
import { selectLocation } from '../order/selectorsOrder'
import breadMap from './dataMapLink'
import { selectModalTotal } from '../../totalPath/selectorsModalTotal'

const BreadCramb: React.FC = () => {
  const { confirm } = useSelector(selectModalTotal)
  const { city, point } = useSelector(selectLocation)
  const activeCar = useSelector(selectActiveCar)
  const location = useLocation()

  const cityAndPoint = city.length > 0 && point.length > 0

  const getLinkTo = (crumb: { to: string }) => {
    if (crumb.to === '/ModelCar' && !cityAndPoint) return '/LocationPage'
    if (
      crumb.to === '/Additionally' &&
      !(cityAndPoint && activeCar.name.length >= 0)
    )
      return '/ModelCar'
    return crumb.to
  }

  return (
    <div className="breadCramb">
      <div className="containerBread">
        <div className="iconContainer">
          {confirm === true && (
            <p className="oilName">Заказ номер RU58491823</p>
          )}
          {!confirm &&
            breadMap.map((crumbs) => (
              <React.Fragment key={crumbs.to}>
                <Link to={getLinkTo(crumbs)}>
                  <p
                    className="breadIcon"
                    style={{
                      color:
                        location.pathname === crumbs.to ? '#0EC261' : 'black',
                    }}
                  >
                    {crumbs.text}
                  </p>
                </Link>
                {crumbs.id < breadMap.length && (
                  <IoMdArrowDropright className="arrowIcon" />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BreadCramb
