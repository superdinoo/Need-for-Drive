/* eslint-disable no-else-return */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateAdditionally } from 'interface/Interface'

const initialState: InitialStateAdditionally = {
  activePointColor: {
    colorText: false,
  },
  activePointRate: {
    rateText: false,
    ratePrice: 0,
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
        rateKey: keyof InitialStateAdditionally['activePointRate'] | ''
        reset: boolean
        price: number
      }>,
    ) => {
      // if (action.payload.reset) {
      //   return {
      //     ...state,
      //     activePointRate: initialState.activePointRate,
      //   }
      // } else {
      //   return {
      //     ...state,
      //     activePointRate: {
      //       ...initialState.activePointRate,
      //       [action.payload
      //         .rateKey as keyof InitialStateAdditionally['activePointRate']]:
      //         !state.activePointRate[
      //           action.payload
      //             .rateKey as keyof InitialStateAdditionally['activePointRate']
      //         ],
      //       ratePrice: action.payload.price,
      //     },
      //   }
      // }
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
