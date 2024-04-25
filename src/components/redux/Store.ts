import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import { fetchData } from '../../api/api'

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
