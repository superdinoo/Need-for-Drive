import React from 'react'
import './Start.scss'
import LeftStart from '../../leftStart/LeftStart'
import Slider from '../../slider/Slider'

const Start: React.FC = () => {
  return (
    <div className="start">
      <LeftStart />
      <Slider />
    </div>
  )
}

export default Start
