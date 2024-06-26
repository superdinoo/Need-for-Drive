import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CarApi, InitialStateCar } from '../../interface/Interface'

const initialState: InitialStateCar = {
  activePoint: {
    pointText: false,
  },
  filterCar: [],
  activeCar: {
    id: null,
    name: '',
    markNumber: '',
    img: '',
    priceMin: 0,
    priceMax: 0,
    color: [],
  },
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setActivePoint: (
      state,
      action: PayloadAction<{
        pointKey: keyof InitialStateCar['activePoint']
        reset?: boolean
      }>,
    ) => {
      return {
        ...state,
        activePoint: {
          ...initialState.activePoint,
          [action.payload.pointKey]: action.payload.reset
            ? false
            : !state.activePoint[action.payload.pointKey],
        },
      }
    },

    setFilterCar: (state, action: PayloadAction<CarApi[]>) => {
      const newState = {
        ...state,
        filterCar: action.payload,
      }
      let filteredCars = newState.filterCar
      if (newState.activePoint.eco) {
        filteredCars = filteredCars.filter(
          (car) => car.categoryId.name === 'Эконом',
        )
      } else if (newState.activePoint.premium) {
        filteredCars = filteredCars.filter(
          (car) => car.categoryId.name === 'Бизнес',
        )
      } else if (newState.activePoint.bike) {
        filteredCars = filteredCars.filter(
          (car) => car.categoryId.name === 'Мототехника',
        )
      } else if (newState.activePoint.sport) {
        filteredCars = filteredCars.filter(
          (car) => car.categoryId.name === 'Спорт',
        )
      }
      return { ...state, filterCar: filteredCars }
    },

    setActiveCar: (state, action) => {
      const { id, name, markNumber, img, priceMin, priceMax, color } =
        action.payload
      return {
        ...state,
        activeCar: {
          id,
          name,
          markNumber,
          img,
          priceMin,
          priceMax,
          color,
        },
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
