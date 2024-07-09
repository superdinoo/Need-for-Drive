/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateCar } from '../../interface/Interface'

const initialState: InitialStateCar = {
  activePoint: {
    pointText: false,
  },
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

    setActiveCar: (state, action) => {
      const { id, name, number, thumbnail, priceMin, priceMax, colors } =
        action.payload
      const imgPath = thumbnail ? thumbnail.path : ''
      return {
        ...state,
        activeCar: {
          id,
          name,
          markNumber: number,
          img: imgPath,
          priceMin,
          priceMax,
          color: colors as [],
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

export const { setActivePoint, setActiveCar, setResetActiveCar } =
  carSlice.actions

export default carSlice.reducer
