import React, { useEffect, useMemo, useState } from 'react'
import './ApiMap.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

interface InputCityProps {
  city: string
  point: string
}
interface GeoData {
  response: {
    GeoObjectCollection: {
      featureMember: {
        GeoObject: {
          Point: {
            pos: string
          }
        }
      }[]
    }
  }
}
const ApiMap: React.FC<InputCityProps> = ({ city, point }) => {
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

  const location = useMemo(async () => {
    try {
      const url = `https://geocode-maps.yandex.ru/1.x?geocode=${city}+${point}&apikey=027a4a64-58cd-4305-9094-19f87e203671&sco=longlat&format=json`
      const response = await fetch(url)
      const data: GeoData = await response.json()
      return coordinatesFromResponse(data)
    } catch (error) {
      console.log('Ошибка при получении координат', error)
      return [54.313201387022815, 48.3490699991779] as [number, number]
    }
  }, [city, point])

  useEffect(() => {
    location.then((result) => {
      setMapCenter(result)
      setMapPoint(result)
    })
  }, [location])
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
