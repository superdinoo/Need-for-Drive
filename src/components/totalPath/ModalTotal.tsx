import React from 'react'
import './TotalPath.scss'
import { PopupTotal } from '../../interface/Interface'

const ModalTotal: React.FC<PopupTotal> = ({ onClose }) => {
  return (
    <div className="containerModalTotal">
      <div className="wrapperModalTotal">
        <div className="titleContainerModalTotal">
          <h4 className="nameTitle">Подтвердить заказ</h4>
        </div>
        <div className="btnContainerModalTotal">
          <div className="btnFirstContainer">
            <button type="button" className="btnFirstModalTotal">
              Подтвердить
            </button>
          </div>
          <div className="btnSecondContainer">
            <button
              type="button"
              className="btnSecondModalTotal"
              onClick={onClose}
            >
              Вернуться
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTotal
