import React from 'react'
import { useSelector } from 'react-redux'
import {
  OrderPathColor,
  OrderPathModel,
  OrderPathOptions,
  OrderPathRate,
  OrderRatesDate,
  OrderPathHeader,
  OrderPathBtn,
  OrderPathPrice,
} from './orderPathMain'
import { OrderProps } from '../../../interface/Interface'
import { selectActiveCar } from '../../cars/selectors'

const OrderPathUnity: React.FC<OrderProps> = ({ currentPages }) => {
  const activeCar = useSelector(selectActiveCar)
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
          <OrderPathPrice activeCar={activeCar} currentPages="" />
        </>
      ) : (
        ''
      )}
      <OrderPathBtn activeCar={activeCar} currentPages={currentPages} />
    </>
  )
}

export default OrderPathUnity
