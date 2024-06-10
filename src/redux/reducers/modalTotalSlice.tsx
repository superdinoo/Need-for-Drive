import { createSlice } from '@reduxjs/toolkit'
import { InitialStateModalTotal } from 'interface/Interface'

const initialState: InitialStateModalTotal = {
  activeButtonModal: {
    confirm: false,
    back: false,
  },
}

const modalTotalSlice = createSlice({
  name: 'modalTotal',
  initialState,
  reducers: {
    setActiveButton: (state, action) => ({
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
  },
})

export const { setActiveButton, setResetConfirm } = modalTotalSlice.actions

export default modalTotalSlice.reducer
