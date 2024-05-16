import React from 'react'
import './Order.scss'
import { useSelector } from 'react-redux'
import { selectActiveCar } from '../../cars/selectors'
import OrderPathUnity from './OrderPathUnity'
import { OrderProps } from '../../../interface/Interface'

const Order: React.FC<OrderProps> = ({ currentPages }) => {
  const activeCar = useSelector(selectActiveCar)

  return (
    <div className="orderContainer">
      <div className="orderContainerMain">
        <OrderPathUnity currentPages={currentPages} activeCar={activeCar} />
      </div>
    </div>
  )
}

export default Order
