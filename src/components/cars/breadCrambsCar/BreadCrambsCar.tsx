/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './BreadCrambsCar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePoint } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import BreadCrambSkelet from './BreadCrambSkelet'

const BreadCrambsCar: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint } = useSelector(getCarInfo)

  const handleActivePoint = (marker: any) => {
    dispatch(setActivePoint(marker))
  }

  return (
    <>
      <BreadCrambSkelet
        initialPath="car"
        activePoint={activePoint}
        title=""
        handleActivePoint={handleActivePoint}
        items={[
          { text: 'Все модели', marker: 'all', id: 1 },
          { text: 'Эконом', marker: 'eco', id: 2 },
          { text: 'Премиум', marker: 'premium', id: 3 },
        ]}
        type="radio"
      />
    </>
  )
}

export default BreadCrambsCar
