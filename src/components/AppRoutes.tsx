import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from '../pages/startScreen/Start'
import Maps from '../pages/location/Maps'
import ModelCar from '../pages/modelCar/ModelCar'
// import Additionally from '../pages/additionally/Additionally'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/HomePage" element={<Start />} />
      <Route path="/LocationPage" element={<Maps />} />
      <Route path="/ModelCar" element={<ModelCar />} />
      {/* <Route path="/Additionally" element={<Additionally />} /> */}
    </Routes>
  )
}

export default AppRoutes
