/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */

import { createSlice } from '@reduxjs/toolkit'
import dataCar from 'components/cars/dataCar'

const carSlice = createSlice({
  name: 'car',
  initialState: {
    activePoint: {
      all: false,
      eco: false,
      premium: false,
    },
    filterCar: dataCar,
    activeCar: {
      id: null,
      name: '',
      price: '',
    },
  },
  reducers: {
    setActivePoint: (state, action) => {
      if (action.payload === 'all') {
        return {
          ...state,
          activePoint: {
            all: !state.activePoint.all,
            eco: false,
            premium: false,
          },
          filterCar:
            action.payload === 'all'
              ? state.filterCar
              : state.filterCar.filter((car) => car.type === action.payload),
        }
      } else if (action.payload === 'eco') {
        return {
          ...state,
          activePoint: {
            eco: !state.activePoint.eco,
            all: false,
            premium: false,
          },
          filterCar:
            action.payload === 'eco'
              ? state.filterCar
              : state.filterCar.filter((car) => car.type === action.payload),
        }
      } else if (action.payload === 'premium') {
        return {
          ...state,
          activePoint: {
            premium: !state.activePoint.premium,
            eco: false,
            all: false,
          },
          filterCar:
            action.payload === 'premium'
              ? state.filterCar
              : state.filterCar.filter((car) => car.type === action.payload),
        }
      }
    },
    setFilterCar: (state) => {
      let filteredCars = dataCar
      if (state.activePoint.eco) {
        filteredCars = dataCar.filter((car) => car.type === 'eco')
      } else if (state.activePoint.premium) {
        filteredCars = dataCar.filter((car) => car.type === 'premium')
      }
      state.filterCar = filteredCars
    },

    setActiveCar: (state, action) => {
      const { id, name, price } = action.payload
      state.activeCar = { id, name, price }
    },
  },
})

export const { setActivePoint, setFilterCar, setActiveCar } = carSlice.actions

export default carSlice.reducer
