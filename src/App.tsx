import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Start from './components/pages/startScreen/Start'
import Maps from './components/pages/location/Maps'
import store from './components/redux/Store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/HomePage" element={<Start />} />
          <Route path="/LocationPage" element={<Maps />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
