import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateModalTotal } from 'interface/Interface'

const initialState: InitialStateModalTotal = {
  activeButtonModal: {
    confirm: false,
    back: false,
  },
  postIdOrderCar: {
    id: 0,
  },
  activeIdOrder: {
    id: 0,
    orderStatusId: 0,
    cityId: { id: 0, name: '' },
    pointId: { id: 0, name: '' },
    carId: { id: 0, name: '' },
    color: '',
    dateFrom: 0,
    dateTo: 0,
    rateId: { id: 0, name: '' },
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
}

const modalTotalSlice = createSlice({
  name: 'modalTotal',
  initialState,
  reducers: {
    setActiveButton: (state, action: PayloadAction<'confirm' | 'back'>) => ({
      ...state,
      activeButtonModal: {
        ...state.activeButtonModal,
        [action.payload]: !state.activeButtonModal[action.payload],
      },
    }),
    setResetConfirm: (state) => ({
      ...state,
      activeButtonModal: {
        ...state.activeButtonModal,
        confirm: false,
      },
    }),
    setPostIdOrderCar: (state, action) => {
      return {
        ...state,
        postIdOrderCar: {
          ...state.postIdOrderCar,
          id: action.payload,
        },
      }
    },
    setOrderId: (state, action) => {
      const updatedState = {
        ...state,
        activeIdOrder: action.payload,
      }
      return updatedState
    },
    setResetOrderData: (state) => {
      return {
        ...state,
        postIdOrderCar: { ...initialState.postIdOrderCar },
        activeIdOrder: { ...initialState.activeIdOrder },
      }
    },
  },
})

export const {
  setActiveButton,
  setResetConfirm,
  setPostIdOrderCar,
  setOrderId,
  setResetOrderData,
} = modalTotalSlice.actions

export default modalTotalSlice.reducer
