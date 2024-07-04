/* eslint-disable no-console */
import { useCallback, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL, API_KEY } from 'components/utils'
import { City, Point } from '../../../interface/Interface'
import debounce from '../../debounce'

const apiSwagger = () => {
  const [cities, setCities] = useState<City[]>([])
  const [points, setPoints] = useState<Point[]>([])

  const fetchCities = async (query: string) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/db/city?q=${query}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': API_KEY,
          },
        },
      )

      setCities(response.data.data)
    } catch (error) {
      console.error('Ошибка при загрузке городов', error)
    }
  }

  const fetchPoints = async (query: string) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/db/point?q=${query}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': API_KEY,
          },
        },
      )
      setPoints(response.data.data)
    } catch (error) {
      console.error('Ошибка при загрузке пунктов выдачи', error)
    }
  }

  const debouncedFetchCities = useCallback(debounce(fetchCities, 500), [])
  const debouncedFetchPoints = useCallback(debounce(fetchPoints, 500), [])

  return {
    fetchCities: debouncedFetchCities,
    fetchPoints: debouncedFetchPoints,
    cities,
    points,
  }
}
export default apiSwagger
