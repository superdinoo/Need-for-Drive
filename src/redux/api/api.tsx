/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios'
import { GeoData } from '../../components/maps/apiMap/GeoDataInterface'
import generateGeocodeUrl from './url'

const { REACT_APP_API_KEY } = process.env
const { REACT_APP_API_BASE_URL } = process.env

export const fetchData = async (
  city: string,
  address: string,
  options: RequestInit,
) => {
  const url = generateGeocodeUrl(city, address)
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

const apiSwagger = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  headers: {
    'X-Api-Factory-Application-Id': REACT_APP_API_KEY,
  },
})

export const request = async (
  url: string,
  options: AxiosRequestConfig = {},
) => {
  try {
    const response = await apiSwagger(url, options)
    return response.data.data
  } catch (error) {
    console.error(`Ошибка запроса к ${url}`, error)
    throw error
  }
}
