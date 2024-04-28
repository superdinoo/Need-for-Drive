/* eslint-disable no-console */
import { GeoData } from '../../components/maps/apiMap/geoDataInterface'
import generateGeocodeUrl from './url'

export const fetchData = async (
  city: string,
  point: string,
  options: RequestInit,
) => {
  const url = generateGeocodeUrl(city, point)
  try {
    const response = await fetch(url, options)
    const jsonResponse = await response.json()
    if (response.ok) {
      return jsonResponse
    }
    return Promise.reject(jsonResponse)
  } catch (error) {
    console.log('Ошибка при получении данных', error)
    throw error
  }
}

export const coordinatesFromResponse = (data: GeoData): [number, number] => {
  const featureMember = data?.response?.GeoObjectCollection?.featureMember
  const pos = featureMember?.[0]?.GeoObject?.Point?.pos

  if (pos) {
    const [longitude, latitude] = pos.split(' ').map(Number)
    return [latitude, longitude]
  }
  return [54.313201387022815, 48.3490699991779]
}
