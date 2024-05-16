/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react'
import './InputCity.scss'
import { useDispatch } from 'react-redux'
import ApiMap from '../apiMap/ApiMap'
import InputField from './form/InputField'
import setLocation from '../../../redux/actions/setLocation '

const InputCity: React.FC = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    city: '',
    point: '',
  })

  const handleInputChange = (name: string, value: string) => {
    setInputValues((prevState) => ({ ...prevState, [name]: value }))
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
            initialPages=""
            value={inputValues.city}
            onChange={(value) => handleInputChange('city', value)}
            name="city"
            placeholder="Начните вводить город"
            onReset={() => handleInputChange('city', '')}
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
            initialPages=""
            value={inputValues.point}
            onChange={(value) => handleInputChange('point', value)}
            name="point"
            placeholder="Начните вводить пункт выдачи"
            onReset={() => handleInputChange('point', '')}
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
          <ApiMap city={inputValues.city} point={inputValues.point} option="" />
        </div>
      </div>
    </div>
  )
}

export default InputCity
