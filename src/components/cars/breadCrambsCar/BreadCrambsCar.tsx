/* eslint-disable jsx-a11y/no-static-element-interactions */
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

  const handleActivePoint = (marker: string) => {
    dispatch(setActivePoint(marker))
  }

  return (
    <>
      <BreadCrambSkelet
        activePoint={activePoint}
        title=""
        handleActivePoint={handleActivePoint}
        items={[
          { text: 'Все модели', marker: 'all' },
          { text: 'Эконом', marker: 'eco' },
          { text: 'Премиум', marker: 'premium' },
        ]}
      />
    </>
  )
}

export default BreadCrambsCar
