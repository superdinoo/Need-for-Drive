import { configureStore } from '@reduxjs/toolkit'
import { fetchData } from './api/api'
import rootReducer from './reducers/rootReducer'

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
