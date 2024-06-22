/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL, API_KEY } from 'components/utils'
import { Rate } from '../../interface/Interface'

const apiSwaggerRate = () => {
  const [rateDateApi, setRateDateApi] = useState<Rate[]>([])

  const fetchRateDate = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/db/rate`, {
        headers: { 'X-Api-Factory-Application-Id': API_KEY },
      })
      setRateDateApi(response.data.data)
    } catch (error) {
      console.error('Ошибка при загрузке тарифа:', error)
    }
  }

  return { rateDateApi, fetchRateDate }
}
export default apiSwaggerRate
