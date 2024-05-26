/* eslint-disable no-nested-ternary */
import React from 'react'
import {
  OrderPathColor,
  OrderPathModel,
  OrderPathOptions,
  OrderPathRate,
  OrderRatesDate,
  OrderPathHeader,
  OrderPathBtn,
} from './orderPathMain'
import { OrderProps } from '../../../interface/Interface'

const OrderPathUnity: React.FC<OrderProps> = ({ currentPages, activeCar }) => {
  return (
    <>
      <OrderPathHeader />
      {currentPages === 'modelCar' || currentPages === 'additionally' ? (
        <>
          <OrderPathModel currentPages={currentPages} activeCar={activeCar} />
          {currentPages === 'additionally' ? (
            <>
              <OrderPathColor />
              <OrderRatesDate />
              <OrderPathRate />
              <OrderPathOptions />
            </>
          ) : (
            ''
          )}
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
