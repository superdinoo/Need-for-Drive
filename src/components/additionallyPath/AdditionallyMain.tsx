/* eslint-disable @typescript-eslint/no-explicit-any */
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

const AdditionallyMain: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointColor, activePointOptions, activePointRate } =
    useSelector(getAdditionallyInfo)
  const activeCar = useSelector(selectActiveCar)

  const { fetchRateDate, rateDateApi } = apiSwaggerRate()

  const activeColors = activeCar.color.map(
    (carColor: string, index: number) => ({
      text: carColor,
      marker: carColor,
      id: index,
    }),
  )

  const activeRate = rateDateApi.map((rateDataidPriceName) => ({
    id: rateDataidPriceName.id,
    price: Number(rateDataidPriceName.price),
    text: `${rateDataidPriceName.rateTypeId.name}, ${rateDataidPriceName.price} ₽`,
    marker: rateDataidPriceName.rateTypeId.name,
  }))

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
          handleActivePoint={(marker: string, price: number = 0) =>
            dispatch(
              setActiveRate({
                rateKey: marker as 'rateText' | 'ratePrice',
                reset: false,
                price,
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
          handleActivePoint={(marker: any) =>
            dispatch(setActiveOptions({ optionsKey: marker, reset: false }))
          }
          type="checkbox"
        />
      </div>
    </>
  )
}

export default AdditionallyMain
