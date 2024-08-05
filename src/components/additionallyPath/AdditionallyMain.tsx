import React, { useEffect } from 'react'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import './AdditionallyPath.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveColor,
  setActiveOptions,
  setActiveRate,
} from '../../redux/reducers/additionallySlice'
import { getAdditionallyInfo } from './selectors'
import BreadCrambSkelet from '../cars/breadCrambsCar/BreadCrambSkelet'
import { AdditionallyPathRentalDate } from './index'
import { selectActiveCar } from '../cars/selectors'
import { RootState } from '../../redux/rootState'
import useAdditionally from './helpers'
import { fetchRateDate } from '../../redux/thunks'

const AdditionallyMain: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch()

  const { activePointColor, activePointOptions, activePointRate } =
    useSelector(getAdditionallyInfo)
  const activeCar = useSelector(selectActiveCar)
  const { rate } = useSelector((state: RootState) => state.apiSwagger)

  const { activeColors, activeRate } = useAdditionally(activeCar, rate)

  useEffect(() => {
    dispatch(fetchRateDate())
  }, [dispatch])

  const handleActivePointRate = (
    marker: string,
    price?: number,
    id?: number,
  ) => {
    dispatch(
      setActiveRate({
        rateKey: marker as 'rateText' | 'ratePrice',
        reset: false,
        price: price ?? 0,
        id: id ?? 0,
      }),
    )
  }

  const handleActivePointColor = (marker: string) => {
    dispatch(setActiveColor({ colorKey: marker, reset: false }))
  }

  const handleActivePointOptions = (marker: string) => {
    dispatch(setActiveOptions({ optionsKey: marker, reset: false }))
  }

  return (
    <>
      <div className="settingCenterAdditionally">
        <div className="centerPath">
          <BreadCrambSkelet
            initialPath="color"
            activePoint={activePointColor}
            title="Цвет"
            items={activeColors}
            handleActivePoint={handleActivePointColor}
            type="radio"
          />
        </div>
      </div>
      <AdditionallyPathRentalDate />
      <div className="centerPath">
        <BreadCrambSkelet
          initialPath="rate"
          activePoint={activePointRate}
          title="Тариф"
          items={activeRate}
          handleActivePoint={handleActivePointRate}
          type="radio"
        />
      </div>
      <div className="centerPath">
        <BreadCrambSkelet
          initialPath="options"
          activePoint={activePointOptions}
          title="Доп услуги"
          items={[
            { text: 'Полный бак, 500р', marker: 'tank', id: 9 },
            { text: 'Детское кресло, 200р', marker: 'seat', id: 10 },
            { text: 'Правый руль, 1600р', marker: 'wheel', id: 11 },
          ]}
          handleActivePoint={handleActivePointOptions}
          type="checkbox"
        />
      </div>
    </>
  )
}
export default AdditionallyMain
