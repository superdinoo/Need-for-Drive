/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react'
import './InputCity.scss'
import ApiMap from '../apiMap/ApiMap'
import InputField from './form/InputField'

interface InputCityProps {
  onLocationChange: (city: string, point: string) => void
}

const InputCity: React.FC<InputCityProps> = ({ onLocationChange }) => {
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
  })

  const handleInputChange = (name: string, value: string) => {
    setInputValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleReset = (name: string) => {
    setInputValues((prevState) => ({ ...prevState, [name]: '' }))
  }
  useEffect(() => {
    onLocationChange(inputValues.city, inputValues.point)
  }, [inputValues.city, inputValues.point])

  return (
    <div className="inputCityContainerMain">
      <div className="inputCityContainer">
        <div className="inputContainer">
          <InputField
            value={inputValues.city}
            onChange={(value) => handleInputChange('city', value)}
            name="city"
            placeholder="Начните вводить город"
            onReset={() => handleReset('city')}
            labels="Город"
            list="cities"
          />
          <datalist id="cities">
            <option value="Ульяновск" />
            <option value="Москва" />
            <option value="Казань" />
            <option value="Самара" />
          </datalist>
          <InputField
            value={inputValues.point}
            onChange={(value) => handleInputChange('point', value)}
            name="point"
            placeholder="Начните вводить пункт выдачи"
            onReset={() => handleReset('point')}
            labels="Пункт выдачи"
            list="point"
          />
          <datalist id="point">
            <option value="ул.Ленина" />
            <option value="ул.Лесная" />
            <option value="ул.Садовая" />
          </datalist>
        </div>
        <div className="mapCityContainer">
          <ApiMap city={inputValues.city} point={inputValues.point} />
        </div>
      </div>
    </div>
  )
}

export default InputCity
