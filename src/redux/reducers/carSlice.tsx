import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import dataCar from 'components/cars/dataCar'
import { InitialState } from 'interface/Interface'

const initialState: InitialState = {
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
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setActivePoint: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        activePoint: {
          ...initialState.activePoint,
          [action.payload]: !state.activePoint[action.payload],
        },
        filterCar:
          action.payload !== 'all'
            ? state.filterCar
            : state.filterCar.filter((car) => car.type === action.payload),
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
