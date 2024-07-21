import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateAdditionally } from 'interface/Interface'

const initialState: InitialStateAdditionally = {
  activePointColor: {
    any: false,
    red: false,
    blue: false,
  },
  activePointRate: {
    everyMinute: false,
    forADay: false,
  },
  activePointOptions: {
    tank: false,
    seat: false,
    wheel: false,
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
        rateKey: 'everyMinute' | 'forADay' | ''
        reset: boolean
      }>,
    ) => {
      return {
        ...state,
        activePointRate: {
          ...initialState.activePointRate,
          [action.payload.rateKey]: action.payload.reset
            ? false
            : !state.activePointRate[action.payload.rateKey],
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
  },
})

export const { setActiveColor, setActiveRate, setActiveOptions } =
  additionallySlice.actions

export default additionallySlice.reducer
