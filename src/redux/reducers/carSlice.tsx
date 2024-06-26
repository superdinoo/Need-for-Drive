import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import dataCar from 'components/cars/dataCar'
import { InitialStateCar } from 'interface/Interface'

const initialState: InitialStateCar = {
  activePoint: {
    all: false,
    eco: false,
    premium: false,
  },
  filterCar: dataCar,
  activeCar: {
    id: null,
    name: '',
    price: 0,
    markNumber: '',
    img: '',
    priceCart: '',
  },
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setActivePoint: (
      state,
      action: PayloadAction<keyof InitialStateCar['activePoint']>,
    ) => {
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
      const { id, name, price, markNumber, img, priceCart } = action.payload
      return {
        ...state,
        activeCar: { id, name, price, markNumber, img, priceCart },
      }
    },
    setResetActiveCar: (state) => {
      return {
        ...state,
        activeCar: initialState.activeCar,
      }
    },
  },
})

export const { setActivePoint, setFilterCar, setActiveCar, setResetActiveCar } =
  carSlice.actions

export default carSlice.reducer
