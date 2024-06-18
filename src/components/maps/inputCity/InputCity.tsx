import React, { useEffect, useState } from 'react'
import './InputCity.scss'
import { useDispatch } from 'react-redux'
import ApiMap from '../apiMap/ApiMap'
import InputField from './form/InputField'
import setLocation from '../../../redux/actions/setLocation '
import apiSwagger from './apiSwagger'

const InputCity: React.FC = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
    cityId: null as string | null,
  })

  const { fetchCities, fetchPoints, cities, points } = apiSwagger()

  const handleInputChange = (name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')

    if (name === 'city') {
      const selectedCity = cities.find((city) => city.name === truncatedValue)
      setInputValues((prevState) => ({
        ...prevState,
        city: truncatedValue,
        cityId: selectedCity ? selectedCity.id : null,
      }))
      fetchCities(truncatedValue)
    }

    if (name === 'point' && inputValues.city) {
      setInputValues((prevState) => ({
        ...prevState,
        point: truncatedValue,
      }))
      fetchPoints(truncatedValue)
    }
  }

  const filteredPoints = !inputValues.city
    ? []
    : points.filter((point) => point.cityId?.name === inputValues.city)

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

          <datalist id="cities">
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </datalist>

          <InputField
            value={inputValues.point}
            onChange={(value) => handleInputChange('point', value)}
            name="point"
            placeholder="Начните вводить пункт выдачи"
            onReset={() => handleInputChange('point', '')}
            labels="Пункт выдачи"
            list="point"
          />
          <datalist id="point">
            {filteredPoints.map((point) => (
              <option key={point.id} value={point.name}>
                {point.name}
              </option>
            ))}
          </datalist>
        </div>
        <div className="mapCityContainer">
          <ApiMap city={inputValues.city} point={inputValues.point} option="" />
        </div>
      </div>
    </div>
  )
}

export default InputCity
