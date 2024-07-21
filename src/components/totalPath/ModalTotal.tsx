/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './TotalPath.scss'
import { PopupTotal } from '../../interface/Interface'
import { setActiveButton } from '../../redux/reducers/modalTotalSlice'
import apiSwaggerTotalPath from './apiSwaggerTotalPath'
import { selectPostIdorderCar } from './selectorsModalTotal'

const ModalTotal: React.FC<PopupTotal> = ({ onClose }) => {
  const dispatch = useDispatch()
  const { fetchOrderPost, fetchGetId } = apiSwaggerTotalPath()
  const { id } = useSelector(selectPostIdorderCar)

  const navigate = useNavigate()

  useEffect(() => {
    fetchOrderPost()
  }, [])

  const handlerConfirm = async () => {
    dispatch(setActiveButton('confirm'))
    onClose()
    try {
      await fetchGetId(String(id))
      if (id > 0) {
        navigate(`/Total/${id}`)
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных с сервера', error)
    }
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
