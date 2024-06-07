import React from 'react'
import { useDispatch } from 'react-redux'
import './TotalPath.scss'
import { PopupTotal } from '../../interface/Interface'
import { setActiveButton } from '../../redux/reducers/modalTotalSlice'

const ModalTotal: React.FC<PopupTotal> = ({ onClose }) => {
  const dispatch = useDispatch()

  const handlerConfirm = () => {
    dispatch(setActiveButton('confirm'))
    onClose()
  }

  const handleBack = () => {
    dispatch(setActiveButton('back'))
    onClose()
  }

  return (
    <div className="containerModalTotal">
      <div className="wrapperModalTotal">
        <div className="titleContainerModalTotal">
          <h4 className="nameTitle">Подтвердить заказ</h4>
        </div>
        <div className="btnContainerModalTotal">
          <div className="btnFirstContainer">
            <button
              type="button"
              className="btnFirstModalTotal"
              onClick={handlerConfirm}
            >
              Подтвердить
            </button>
          </div>
          <div className="btnSecondContainer">
            <button
              type="button"
              className="btnSecondModalTotal"
              onClick={handleBack}
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
