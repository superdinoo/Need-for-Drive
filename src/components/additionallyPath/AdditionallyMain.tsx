import React, { useEffect } from 'react'
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
import apiSwaggerRate from './apiSwaggerRate'
import helpers from './helpers'

const AdditionallyMain: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointColor, activePointOptions, activePointRate } =
    useSelector(getAdditionallyInfo)
  const activeCar = useSelector(selectActiveCar)
  const { fetchRateDate, rateDateApi } = apiSwaggerRate()
  const { activeRate, activeColors } = helpers(activeCar, rateDateApi)

  useEffect(() => {
    fetchRateDate()
  }, [])

  return (
    <>
      <div className="settingCenterAdditionally">
        <div className="centerPath">
          <BreadCrambSkelet
            initialPath="color"
            activePoint={activePointColor}
            title="Цвет"
            items={activeColors}
            handleActivePoint={(marker: string) =>
              dispatch(setActiveColor({ colorKey: marker, reset: false }))
            }
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
          handleActivePoint={(marker: string, price?: number, id?: number) =>
            dispatch(
              setActiveRate({
                rateKey: marker as 'rateText' | 'ratePrice',
                reset: false,
                price: price ?? 0,
                id: id ?? 0,
              }),
            )
          }
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
          handleActivePoint={(marker: string) =>
            dispatch(setActiveOptions({ optionsKey: marker, reset: false }))
          }
          type="checkbox"
        />
      </div>
    </>
  )
}
export default AdditionallyMain
