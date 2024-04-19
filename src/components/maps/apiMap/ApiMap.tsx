import React, { useEffect, useState } from 'react'
import './ApiMap.scss'
import { useDispatch } from 'react-redux'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import fetchData from './api'
import { GeoData } from './GeoDataInterface'
import { InputCityProps } from '../../../interface/Interface'

import {
  fetchDataFailure,
  fetchDataSuccess,
} from '../../redux/actions/ApiAction'

const ApiMap: React.FC<InputCityProps> = ({ city, point }) => {
  const dispatch = useDispatch()
  const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0])
  const [mapPoint, setMapPoint] = useState<[number, number] | null>(null)

  const coordinatesFromResponse = (data: GeoData): [number, number] => {
    const featureMember = data?.response?.GeoObjectCollection?.featureMember
    const pos = featureMember?.[0]?.GeoObject?.Point?.pos
    if (pos) {
      const [longitude, latitude] = pos.split(' ').map(Number)
      return [latitude, longitude]
    }
    return [54.313201387022815, 48.3490699991779]
  }

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData(city, point)
        const result = coordinatesFromResponse(data)
        setMapCenter(result)
        setMapPoint(result)
        dispatch(fetchDataSuccess(result))
      } catch (error) {
        console.log('Ошибка при получении координат', error)
        setMapCenter([54.313201387022815, 48.3490699991779])
        setMapPoint(null)
        dispatch(fetchDataFailure(new Error('Ошибка при получении координат')))
      }
    }

    fetchDataFromApi()
  }, [city, point, dispatch])

  return (
    <YMaps>
      <div className="mapY">
        <p className="mapYTitle">Выбрать на карте:</p>
        <Map
          key={`${mapCenter[0]}_${mapCenter[1]}`}
          defaultState={{
            center: mapCenter,
            zoom: 12,
          }}
          className="mapYSetting"
        >
          <Placemark
            geometry={{ type: 'Point', coordinates: mapPoint }}
            properties={{
              hintContent: point,
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

export default ApiMap
