import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from '../pages/startScreen/Start'
import Maps from '../pages/location/Maps'
import ModelCar from '../pages/modelCar/ModelCar'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/HomePage" element={<Start />} />
      <Route path="/LocationPage" element={<Maps />} />
      <Route path="/ModelCar" element={<ModelCar />} />
    </Routes>
  )
}

export default AppRoutes
