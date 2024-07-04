/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import './BreadCrambsCar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePoint } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import BreadCrambSkelet from './BreadCrambSkelet'
import apiSwaggerCar from '../apiSwaggerCar'

const BreadCrambsCar: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint } = useSelector(getCarInfo)

  const { category, fetchCategory } = apiSwaggerCar()

  const handleActivePoint = (marker: any) => {
    dispatch(setActivePoint({ pointKey: marker }))
  }

  const markerMap: { [key: string]: string } = {
    Бизнес: 'premium',
    Эконом: 'eco',
    Мототехника: 'bike',
    Спорт: 'sport',
  }

  const items = category.map((categoryItem) => ({
    text: categoryItem.name,
    marker: markerMap[categoryItem.name] || 'all',
    id: categoryItem.id,
  }))

  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <>
      <BreadCrambSkelet
        initialPath="car"
        activePoint={activePoint}
        title=""
        handleActivePoint={handleActivePoint}
        items={items}
        type="radio"
      />
    </>
  )
}

export default BreadCrambsCar
