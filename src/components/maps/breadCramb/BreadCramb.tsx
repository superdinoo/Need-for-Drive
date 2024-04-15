import React from 'react'
import './BreadCramb.scss'

import { IoMdArrowDropright } from 'react-icons/io'

const BreadCramb: React.FC = () => (
  <div className="breadCramb">
    <div className="containerBread">
      <div className="iconContainer">
        <a href="/" className="breadIcon" style={{ color: '#0EC261' }}>
          Местоположение
        </a>
        <IoMdArrowDropright className="arrowIcon" />
        <a href="/" className="breadIcon">
          Модель
        </a>
        <IoMdArrowDropright className="arrowIcon" />
        <a href="/" className="breadIcon">
          Дополнительно
        </a>
        <IoMdArrowDropright className="arrowIcon" />
        <a href="/" className="breadIcon">
          Итого
        </a>
      </div>
    </div>
  </div>
)

export default BreadCramb
