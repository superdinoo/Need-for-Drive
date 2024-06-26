import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateAdditionally } from 'interface/Interface'

const initialState: InitialStateAdditionally = {
  activePointColor: {
    colorText: false,
  },
  activePointRate: {
    rateText: false,
    ratePrice: 0,
    rateId: 0,
  },
  activePointOptions: {
    tank: false,
    seat: false,
    wheel: false,
  },
  activeRentalPrice: {
    rentalPrice: 0,
  },
}

const additionallySlice = createSlice({
  name: 'additionally',
  initialState,
  reducers: {
    setActiveColor: (
      state,
      action: PayloadAction<{
        colorKey: keyof InitialStateAdditionally['activePointColor'] | ''
        reset: boolean
      }>,
    ) => {
      return {
        ...state,
        activePointColor: {
          ...initialState.activePointColor,
          [action.payload.colorKey]: action.payload.reset
            ? false
            : !state.activePointColor[action.payload.colorKey],
        },
      }
    },

    setActiveRate: (
      state,
      action: PayloadAction<{
        rateKey: keyof InitialStateAdditionally['activePointRate'] | ''
        reset: boolean
        price: number
        id: number
      }>,
    ) => {
      return {
        ...state,
        activePointRate: {
          ...initialState.activePointRate,
          [action.payload
            .rateKey as keyof InitialStateAdditionally['activePointRate']]:
            action.payload.reset
              ? false
              : !state.activePointRate[
                  action.payload
                    .rateKey as keyof InitialStateAdditionally['activePointRate']
                ],
          ratePrice: action.payload.price,
          rateId: action.payload.id,
        },
      }
    },

    setActiveOptions: (
      state,
      action: PayloadAction<{
        optionsKey: keyof InitialStateAdditionally['activePointOptions'] | 'all'
        reset: boolean
      }>,
    ) => {
      if (action.payload.optionsKey === 'all' && action.payload.reset) {
        return {
          ...state,
          activePointOptions: {
            ...initialState.activePointOptions,
            tank: false,
            seat: false,
            wheel: false,
          },
        }
      }
      return {
        ...state,
        activePointOptions: {
          ...state.activePointOptions,
          [action.payload.optionsKey]:
            !state.activePointOptions[action.payload.optionsKey],
        },
      }
    },

    setRentalPrice: (state, action) => {
      return {
        ...state,
        activeRentalPrice: {
          ...state.activeRentalPrice,
          rentalPrice: action.payload.rentalPrice,
        },
      }
    },
  },
})

export const {
  setActiveColor,
  setActiveRate,
  setActiveOptions,
  setRentalPrice,
} = additionallySlice.actions

export default additionallySlice.reducer
