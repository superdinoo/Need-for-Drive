/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL, API_KEY } from 'components/utils'
import { CarApi, CarCategory } from 'interface/Interface'
import { useDispatch } from 'react-redux'
import { setFilterCar } from '../../redux/reducers/carSlice'

const apiSwaggerCar = () => {
  const dispatch = useDispatch()
  const [carsMain, setCarsMain] = useState<CarApi[]>([])
  const [category, setCategory] = useState<CarCategory[]>([])

  const fetchCarApi = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/db/car`, {
        headers: {
          'X-Api-Factory-Application-Id': API_KEY,
        },
      })
      setCarsMain(response.data.data)
      dispatch(setFilterCar(response.data.data))
    } catch (error) {
      console.error('Ошибка при загрузке машины', error)
    }
  }

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/db/category`, {
        headers: {
          'X-Api-Factory-Application-Id': API_KEY,
        },
      })
      setCategory(response.data.data)
    } catch (error) {
      console.error('Ошибка при загрузке машины', error)
    }
  }

  return { fetchCarApi, fetchCategory, carsMain, category }
}

export default apiSwaggerCar
