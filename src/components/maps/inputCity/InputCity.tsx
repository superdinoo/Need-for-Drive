/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './InputCity.scss'
import { useDispatch } from 'react-redux'
import ApiMap from '../apiMap/ApiMap'
import InputField from './form/InputField'
import setLocation from '../../../redux/actions/setLocation '

interface City {
  id: string
  name: string
  cityId: number
}

interface Point {
  id: string
  name: string
  cityId: number
}

const InputCity: React.FC = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
    cityId: null as string | null,
  })

  const [cities, setCities] = useState<City[]>([])
  const [points, setPoints] = useState<City[]>([])

  const handleInputChange = (name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')
    setInputValues((prevState) => ({ ...prevState, [name]: truncatedValue }))

    if (name === 'city') {
      fetchCities(truncatedValue)
    } else if (name === 'point' && inputValues.city) {
      fetchPoints(inputValues.city, truncatedValue)
    }
  }
  const API_KEY = '5e25c641099b810b946c5d5b'
  const API_BASE_URL = 'https://api-factory.simbirsoft1.com/api/db'
  const fetchCities = async (query: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/city/search=${query}`, {
        headers: {
          'X-Api-Factory-Application-Id': API_KEY,
        },
      })
      setCities(response.data)
      console.log('Полученно данных:', response.data)
    } catch (error) {
      console.error('Ошибка при загрузке городов', error)
    }
  }

  const handleCitySelect = (city: City) => {
    setInputValues({
      ...inputValues,
      city: city.name,
      cityId: city.id,
    })
    setCities([])
    setPoints([])
  }

  const fetchPoints = async (cityId: string, query: string) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/point?cityId=${cityId}&search=${query}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': API_KEY,
          },
        },
      )
      setPoints(response.data)
      console.log(response.data)
      console.log(cityId)
    } catch (error) {
      console.error('Ошибка при загрузке пунктов выдачи', error)
    }
  }

  const handlePointSelect = (point: Point) => {
    setInputValues({
      ...inputValues,
      point: point.name,
      cityId: point.id,
    })

    setPoints([])
  }

  useEffect(() => {
    dispatch(
      setLocation({
        city: inputValues.city,
        point: inputValues.point,
        option: '',
      }),
    )
  }, [inputValues.city, inputValues.point, dispatch])

  return (
    <div className="inputCityContainerMain">
      <div className="inputCityContainer">
        <div className="inputContainer">
          <InputField
            value={inputValues.city}
            onChange={(value) => handleInputChange('city', value)}
            name="city"
            placeholder="Начните вводить город"
            onReset={() => handleInputChange('city', '')}
            labels="Город"
            list="cities"
          />
          {cities.length > 0 && (
            <ul>
              {cities.map((city) => (
                <li key={city.id} onClick={() => handleCitySelect(city)}>
                  {city.name}
                </li>
              ))}
            </ul>
          )}
          <InputField
            value={inputValues.point}
            onChange={(value) => handleInputChange('point', value)}
            name="point"
            placeholder="Начните вводить пункт выдачи"
            onReset={() => handleInputChange('point', '')}
            labels="Пункт выдачи"
            list="point"
          />
          {points.length > 0 && (
            <ul>
              {points.map((point) => (
                <li key={point.id} onClick={() => handlePointSelect(point)}>
                  {point.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mapCityContainer">
          <ApiMap city={inputValues.city} point={inputValues.point} option="" />
        </div>
      </div>
    </div>
  )
}

export default InputCity
