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
      action: PayloadAction<keyof InitialStateAdditionally['activePointColor']>,
    ) => {
      return {
        ...state,
        activePointColor: {
          ...initialState.activePointColor,
          [action.payload]: !state.activePointColor[action.payload],
        },
      }
    },

    setActiveRate: (
      state,
      action: PayloadAction<'everyMinute' | 'forADay'>,
    ) => {
      return {
        ...state,
        activePointRate: {
          ...initialState.activePointRate,
          [action.payload]: !state.activePointRate[action.payload],
        },
      }
    },

    setActiveOptions: (
      state,
      action: PayloadAction<
        keyof InitialStateAdditionally['activePointOptions']
      >,
    ) => {
      return {
        ...state,
        activePointOptions: {
          ...state.activePointOptions,
          [action.payload]: !state.activePointOptions[action.payload],
        },
        state,
      }
    },
  },
})

export const { setActiveColor, setActiveRate, setActiveOptions } =
  additionallySlice.actions

export default additionallySlice.reducer
