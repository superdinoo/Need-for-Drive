import React from 'react'
import './BreadCramb.scss'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import breadMap from './dataMapLink'
import {
  selectModalTotal,
  selectPostIdorderCar,
} from '../../totalPath/selectorsModalTotal'
import useBreadcrumbHelpers from './helpersBreadCramb'

const BreadCramb: React.FC = () => {
  const { confirm } = useSelector(selectModalTotal)
  const { id } = useSelector(selectPostIdorderCar)
  const { getLinkTo, colorClass } = useBreadcrumbHelpers(breadMap)

  return (
    <div className="breadCramb">
      <div className="containerBread">
        <div className="iconContainer">
          {confirm === true && (
            <p className="oilName">{`Заказ номер RU${id}`}</p>
          )}
          {!confirm &&
            breadMap.map((crumbs, index) => (
              <React.Fragment key={crumbs.to}>
                <Link to={getLinkTo(crumbs)}>
                  <p className={colorClass(index)}>{crumbs.text}</p>
                </Link>
                {crumbs.id < breadMap.length && (
                  <IoMdArrowDropright color="gray" />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BreadCramb
