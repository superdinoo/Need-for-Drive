import React from 'react'
import './Center.scss'
import { Link } from 'react-router-dom'

const Center: React.FC = () => {
  return (
    <div className="center">
      <div className="title">
        <h1 className="titleText">Каршеринг </h1>
        <h1 className="titleText2">Need for drive </h1>
      </div>
      <div className="textCenter">
        <p className="textCenterText">Поминутная аренда авто твоего города</p>
      </div>
      <div className="btnCenter">
        <Link to="/LocationPage">
          <button type="button" className="btnCenterText">
            Забронировать
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Center
