import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store'
import AppRoutes from './components/AppRoutes'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  )
}

export default App
