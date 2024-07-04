import React, { useEffect } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { AnyAction } from 'redux'
import './BreadCrambsCar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePoint } from '../../../redux/reducers/carSlice'
import { getCarInfo } from '../selectors'
import BreadCrambSkelet from './BreadCrambSkelet'
import { fetchCategory } from '../../../redux/thunks/thunksLocation'
import helpersBreadCrambsCar from './helpersBreadCrambsCar'

const BreadCrambsCar: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()
  const { activePoint } = useSelector(getCarInfo)
  const handleActivePoint = (marker: string) => {
    dispatch(setActivePoint({ pointKey: marker }))
  }

  const items = useSelector(helpersBreadCrambsCar)

  useEffect(() => {
    dispatch(fetchCategory())
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
