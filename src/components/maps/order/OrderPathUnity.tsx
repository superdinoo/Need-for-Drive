import React from 'react'
import { OrderPathModel, OrderPathHeader, OrderPathBtn } from './orderPathMain'
import { OrderProps } from '../../../interface/Interface'

const OrderPathUnity: React.FC<OrderProps> = ({ currentPages, activeCar }) => {
  return (
    <>
      <OrderPathHeader />
      {currentPages === 'modelCar' || currentPages === 'additionally' ? (
        <>
          <OrderPathModel currentPages={currentPages} activeCar={activeCar} />

          <div className="priceOrderContainer">
            <h3 className="priceOrder">Цена: </h3>
            <p className="priceOrderWidth">{activeCar.price}</p>
          </div>
        </>
      ) : (
        ''
      )}
      <OrderPathBtn activeCar={activeCar} currentPages={currentPages} />
    </>
  )
}

export default OrderPathUnity
