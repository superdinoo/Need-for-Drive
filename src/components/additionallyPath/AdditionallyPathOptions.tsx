/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveOptions } from '../../redux/reducers/additionallySlice'
import { getAdditionallyInfo } from './selectors'
import BreadCrambSkelet from '../cars/breadCrambsCar/BreadCrambSkelet'

const AdditionallyPathOptions: React.FC = () => {
  const dispatch = useDispatch()
  const { activePointOptions } = useSelector(getAdditionallyInfo)

  const handleActivePoint = (marker: any) => {
    dispatch(setActiveOptions(marker))
  }
  return (
    <div className="centerPath">
      <BreadCrambSkelet
        initialPath="options"
        activePoint={activePointOptions}
        title="Доп услуги"
        handleActivePoint={handleActivePoint}
        items={[
          { text: 'Полный бак, 500р', marker: 'tank', id: 9 },
          { text: 'Детское кресло, 200р', marker: 'seat', id: 10 },
          { text: 'Правый руль, 1600р', marker: 'wheel', id: 11 },
        ]}
      />
    </div>
  )
}

export default AdditionallyPathOptions
