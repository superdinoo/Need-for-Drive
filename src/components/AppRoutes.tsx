import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/startScreen/Start'
import Maps from './pages/location/Maps'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/HomePage" element={<Start />} />
      <Route path="/LocationPage" element={<Maps />} />
    </Routes>
  )
}

export default AppRoutes
