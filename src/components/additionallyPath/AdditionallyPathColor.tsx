/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './AdditionallyPath.scss'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrambSkelet from '../cars/breadCrambsCar/BreadCrambSkelet'
import { getAdditionallyInfo } from './selectors'
import { setActiveColor } from '../../redux/reducers/additionallySlice'

const AdditionallyPathColor: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointColor } = useSelector(getAdditionallyInfo)

  const handleActivePoint = (marker: any) => {
    dispatch(setActiveColor(marker))
  }

  return (
    <div className="centerPath">
      <BreadCrambSkelet
        initialPath="color"
        activePoint={activePointColor}
        title="Цвет"
        handleActivePoint={handleActivePoint}
        items={[
          { text: 'Любой', marker: 'any', id: 4 },
          { text: 'Красный', marker: 'red', id: 5 },
          { text: 'Голубой', marker: 'blue', id: 6 },
        ]}
      />
    </div>
  )
}

export default AdditionallyPathColor
