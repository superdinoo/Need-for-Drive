/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import './BreadCrambsCar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePoint } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import BreadCrambSkelet from './BreadCrambSkelet'
import apiSwaggerCar from '../apiSwaggerCar'
import helpersBreadCrambCar from './helpersBreadCrambCar'

const BreadCrambsCar: React.FC = () => {
  const dispatch = useDispatch()
  const { activePoint } = useSelector(getCarInfo)
  const { category, fetchCategory } = apiSwaggerCar()
  const { items } = helpersBreadCrambCar(category)

  const handleActivePoint = (marker: any) => {
    dispatch(setActivePoint({ pointKey: marker }))
  }

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
