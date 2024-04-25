import React from 'react'
import './LeftWrapper.scss'
import { Hamburger, Header, Footer, Center } from './leftComponent'

const LeftWrapper: React.FC = () => {
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

export default LeftWrapper
