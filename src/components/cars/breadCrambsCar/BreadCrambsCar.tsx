/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './BreadCrambsCar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePoint } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'

const BreadCrambsCar: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint } = useSelector(getCarInfo)

  const handleActivePoint = (marker: string) => {
    dispatch(setActivePoint(marker))
  }

  return (
    <div className="breadCrambModelCar">
      <div className="allModel" onClick={() => handleActivePoint('all')}>
        <div className={activePoint.all ? 'activeCircle' : 'circle'} />
        <p className={activePoint.all ? 'allTextBlack' : 'allText'}>
          Все модели
        </p>
      </div>
      <div className="allModel" onClick={() => handleActivePoint('eco')}>
        <div className={activePoint.eco ? 'activeCircle' : 'circle'} />
        <p className={activePoint.eco ? 'allTextBlack' : 'allText'}>Эконом</p>
      </div>
      <div className="allModel" onClick={() => handleActivePoint('premium')}>
        <div className={activePoint.premium ? 'activeCircle' : 'circle'} />
        <p className={activePoint.premium ? 'allTextBlack' : 'allText'}>
          Премиум
        </p>
      </div>
    </div>
  )
}

export default BreadCrambsCar
