import React from 'react'
import './Start.scss'
import LeftWrapper from '../../components/leftWrapper/LeftWrapper'
import Slider from '../../components/slider/Slider'

const Start: React.FC = () => {
  return (
    <div className="start">
      <LeftWrapper />
      <Slider />
    </div>
  )
}

export default Start
