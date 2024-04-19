import React from 'react'
import './LeftStart.scss'
import { Hamburger, Header, Footer, Center } from './leftComponent'

const LeftStart: React.FC = () => {
  return (
    <div className="container">
      <div className="left">
        <Hamburger />
        <div className="leftContainer">
          <Header />
          <Center />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LeftStart
