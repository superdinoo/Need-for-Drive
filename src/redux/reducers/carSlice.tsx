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
            [action.payload]: true,
          },
          filterCar: state.filterCar,
        }
      }
      if (action.payload === 'eco' || action.payload === 'premium') {
        return {
          ...state,
          activePoint: {
            [action.payload]: true,
          },
          filterCar:
            action.payload !== 'all'
              ? state.filterCar.filter((car) => car.type === action.payload)
              : state.filterCar,
        }
      }

      return state
    },

    setFilterCar: (state) => {
      let filteredCars = dataCar
      if (state.activePoint.eco) {
        filteredCars = dataCar.filter((car) => car.type === 'eco')
      } else if (state.activePoint.premium) {
        filteredCars = dataCar.filter((car) => car.type === 'premium')
      }
      return { ...state, filterCar: filteredCars }
    },

    setActiveCar: (state, action) => {
      const { id, name, price } = action.payload
      return { ...state, activeCar: { id, name, price } }
    },
  },
})

export const { setActivePoint, setFilterCar, setActiveCar } = carSlice.actions

export default carSlice.reducer
