/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
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

const AdditionallyMain: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointColor, activePointOptions, activePointRate } =
    useSelector(getAdditionallyInfo)

  return (
    <>
      <div className="settingCenterAdditionally">
        <div className="centerPath">
          <BreadCrambSkelet
            initialPath="color"
            activePoint={activePointColor}
            title="Цвет"
            items={[
              { text: 'Любой', marker: 'any', id: 4 },
              { text: 'Красный', marker: 'red', id: 5 },
              { text: 'Голубой', marker: 'blue', id: 6 },
            ]}
            handleActivePoint={(marker: any) =>
              dispatch(setActiveColor(marker))
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
          items={[
            { text: 'Поминутно, 7₽/мин', marker: 'everyMinute', id: 12 },
            { text: 'На сутки, 1999 ₽/сутки', marker: 'forADay', id: 13 },
          ]}
          handleActivePoint={(marker: any) => dispatch(setActiveRate(marker))}
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
            dispatch(setActiveOptions(marker))
          }
          type="checkbox"
        />
      </div>
    </>
  )
}

export default AdditionallyMain
