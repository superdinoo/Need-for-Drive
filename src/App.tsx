import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './components/pages/startScreen/Start'
import Maps from './components/pages/location/Maps'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/Simbirsoft" element={<Start />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </div>
  )
}

export default App
