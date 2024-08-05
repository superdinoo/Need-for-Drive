import React, { useEffect } from 'react'
import './TotalPath.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectModalTotal, selectPostIdorderCar } from './selectorsModalTotal'
import { DateTimeFormatOptions } from '../../interface/Interface'
import { selectActiveCar } from '../cars/selectors'
import { selectRentalDate } from '../maps/order/selectorsOrder'

const TotalPath: React.FC = () => {
  const { img, markNumber, name } = useSelector(selectActiveCar)
  const { start } = useSelector(selectRentalDate)
  const { id } = useSelector(selectPostIdorderCar)
  const { confirm } = useSelector(selectModalTotal)

  const navigate = useNavigate()

  const date = new Date(start)

  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }

  const formateDate = date.toLocaleDateString('ru-Ru', options)

  useEffect(() => {
    if (id !== undefined || id > 0) {
      navigate(`/Total/${id}`)
    }
  }, [confirm, id])

  return (
    <div className="totalPathContainer">
      <div className="leftPathTotal">
        {confirm && <h3 className="titleConfirm">Ваш заказ подтверждён</h3>}
        <p className="titleLeftPathTotal">{name}</p>
        <div className="totalMark">
          <p className="markName">{markNumber}</p>
        </div>
        <div className="oilContainer">
          <p className="oilName">Топливо</p>
          <p className="oilValue">100%</p>
        </div>
        <div className="dateTotalContainer">
          <p className="oilName">Доступна с</p>
          <p className="oilValue">{formateDate}</p>
        </div>
      </div>
      <div className="rightPathTotal">
        <img className="rightPathTotalImg" src={img} alt="car" />
      </div>
    </div>
  )
}

export default TotalPath
