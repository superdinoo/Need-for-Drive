import React from 'react'
import ApiMap from '../apiMap/ApiMap'
import InputField from './form/InputField'
import useLocationInput from './useLocationInput'

const InputCity: React.FC = () => {
  const {
    inputValues,
    cities,
    handleInputChange,
    filteredPoints,
    addressPoint,
  } = useLocationInput()
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
          <ApiMap
            city={inputValues.city}
            point={inputValues.point}
            option=""
            address={addressPoint?.address ?? inputValues.point}
          />
        </div>
      </div>
    </div>
  )
}

export default InputCity
