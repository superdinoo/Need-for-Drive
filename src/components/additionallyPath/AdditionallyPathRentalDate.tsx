import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import DatePicker from 'react-datepicker'
import setRatesDate from '../../redux/actions/setRentalDate'
import 'react-datepicker/dist/react-datepicker.css'
import { selectRentalDate } from '../maps/order/selectorsOrder'

const AdditionallyPathRentalDate: React.FC = () => {
  const dispatch = useDispatch()
  const { start: saveStart, end: saveEnd } = useSelector(selectRentalDate)

  const [dates, setDates] = useState({
    start: saveStart ? new Date(saveStart) : null,
    end: saveEnd ? new Date(saveEnd) : null,
  })

  const handleReset = (datesType: keyof typeof dates) => {
    setDates((prevDates) => ({ ...prevDates, [datesType]: null }))
    dispatch(
      setRatesDate({
        [datesType]: null,
        start: '',
        end: '',
      }),
    )
  }

  return (
    <div className="centerPath">
      <div className="breadCrambModelCar">
        <div className="mainAdditionallyRentalDate">
          <p className="titleBread">Дата аренды</p>
          <div className="wrapperReantalDate">
            <div className="datePickerWrapper">
              <p>С</p>
              <DatePicker
                className="inputCity"
                selected={dates.start}
                onChange={(date: Date | null) => {
                  if (date) {
                    setDates((prevDates) => ({ ...prevDates, start: date }))
                    dispatch(
                      setRatesDate({
                        start: date ? date.toISOString() : '',
                        end: '',
                      }),
                    )
                  }
                }}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat="dd.MM.yyyy HH:mm"
              />
              {dates.start && (
                <RxCross2
                  className="rxCrossIconDatePicker"
                  onClick={() => handleReset('start')}
                />
              )}
            </div>
            <div className="datePickerWrapper">
              <p>По</p>
              <DatePicker
                className="inputCity"
                selected={dates.end}
                onChange={(date: Date | null) => {
                  if (date) {
                    setDates((prevDates) => ({ ...prevDates, end: date }))
                    dispatch(
                      setRatesDate({
                        start: dates.start ? dates.start.toISOString() : '',
                        end: date ? date.toISOString() : '',
                      }),
                    )
                  }
                }}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat="dd.MM.yyyy HH:mm"
              />
              {dates.end && (
                <RxCross2
                  className="rxCrossIconDatePicker"
                  onClick={() => handleReset('end')}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionallyPathRentalDate
