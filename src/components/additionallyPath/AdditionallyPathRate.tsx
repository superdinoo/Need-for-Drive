/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdditionallyInfo } from './selectors'
import { setActiveRate } from '../../redux/reducers/additionallySlice'
import BreadCrambSkelet from '../cars/breadCrambsCar/BreadCrambSkelet'

const AdditionallyPathRate: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointRate } = useSelector(getAdditionallyInfo)

  const handleActivePoint = (marker: any) => {
    dispatch(setActiveRate(marker))
  }
  return (
    <div className="centerPath">
      <BreadCrambSkelet
        initialPath="rate"
        activePoint={activePointRate}
        title="Тариф"
        handleActivePoint={handleActivePoint}
        items={[
          { text: 'Поминутно, 7₽/мин', marker: 'everyMinute', id: 12 },
          { text: 'На сутки, 1999 ₽/сутки', marker: 'forADay', id: 13 },
        ]}
      />
    </div>
  )
}

export default AdditionallyPathRate
