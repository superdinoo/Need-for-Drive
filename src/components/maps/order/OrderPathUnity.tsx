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
import {
  selectActivePointColor,
  selectActivePointRate,
} from '../../additionallyPath/selectors'
import { selectLocation, selectRentalDate } from './selectorsOrder'

const OrderPathUnity: React.FC<OrderProps> = ({ currentPages }) => {
  const activeCar = useSelector(selectActiveCar)
  const activeLocation = useSelector(selectLocation)
  const activeColor = useSelector(selectActivePointColor)
  const activeRate = useSelector(selectActivePointRate)
  const activeRentalDate = useSelector(selectRentalDate)

  return (
    <>
      {activeLocation.city.length > 0 && activeLocation.point.length > 0 && (
        <OrderPathHeader />
      )}

      <>
        {activeCar.name.length > 0 && (
          <OrderPathModel currentPages={currentPages} activeCar={activeCar} />
        )}

        {activeColor && activeRate && activeCar.name.length > 0 && (
          <>
            <OrderPathColor />
            {activeRentalDate.start.length > 0 && <OrderRatesDate />}
            <OrderPathRate />
            <OrderPathOptions />
          </>
        )}
        {activeCar.name.length > 0 && (
          <OrderPathPrice activeCar={activeCar} currentPages={currentPages} />
        )}
      </>

      <OrderPathBtn activeCar={activeCar} currentPages={currentPages} />
    </>
  )
}

export default OrderPathUnity
