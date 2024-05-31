import React from 'react'
import './Order.scss'
import OrderPathUnity from './OrderPathUnity'
import { OrderProps } from '../../../interface/Interface'

const Order: React.FC<OrderProps> = ({ currentPages }) => {
  return (
    <div className="orderContainer">
      <div className="orderContainerMain">
        <OrderPathUnity currentPages={currentPages} />
      </div>
    </div>
  )
}

export default Order
