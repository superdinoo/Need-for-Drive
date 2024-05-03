import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { fetchData } from './api/api'
import rootReducer from './reducers/rootReducer'
import { RootState } from './rootState'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchData },
      },
    }),
})
export default store

export type AppThunk = ThunkAction<
  void,
  RootState,
  { fetchData: typeof fetchData },
  Action<string>
>
