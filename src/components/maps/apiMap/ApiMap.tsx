/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect } from 'react'
import './ApiMap.scss'
import { useDispatch, useSelector } from 'react-redux'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { RootState } from '../../../redux/rootState'
import { InputCityProps } from '../../../interface/Interface'
import fetchMapData from '../../../redux/actions/fetchMapData'
import getMapInfo from './selectorsMap'
import debounce from '../../debounce'

const ApiMap: React.FC<InputCityProps> = ({ city, address }) => {
  const dispatch: any = useDispatch()

  const debouncedFetchMapData = useCallback(
    debounce(() => {
      dispatch(fetchMapData(city, address, {}))
    }, 500),
    [dispatch, city, address],
  )

  useEffect(() => {
    debouncedFetchMapData()
  }, [city, address, debouncedFetchMapData])

  const { mapCenter, mapPoint } = useSelector((state: RootState) =>
    getMapInfo(state),
  )
  return (
    <YMaps>
      <div className="mapY">
        <p className="mapYTitle">Выбрать на карте:</p>
        <Map
          key={`${mapCenter?.[0] ?? ''}_${mapCenter?.[1] ?? ''}`}
          defaultState={{
            center: mapCenter,
            zoom: 12,
          }}
          className="mapYSetting"
        >
          <Placemark
            geometry={{ type: 'Point', coordinates: mapPoint }}
            properties={{
              hintContent: address,
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

export default ApiMap
