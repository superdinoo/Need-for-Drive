import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import DatePicker from 'react-datepicker'
import setRatesDate from '../../redux/actions/setRentalDate'

import 'react-datepicker/dist/react-datepicker.css'

const AdditionallyPathRentalDate: React.FC = () => {
  const [dates, setDates] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (dates.start && dates.end) {
      dispatch(
        setRatesDate({
          start: dates.start.toISOString(),
          end: dates.end.toISOString(),
        }),
      )
    }
  }, [dates.start, dates.end, dispatch])

  const handleReset = (datesType: keyof typeof dates) => {
    setDates((prevDates) => ({ ...prevDates, [datesType]: null }))
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
                onChange={(date: Date | null) =>
                  setDates((prevState) => ({ ...prevState, start: date }))
                }
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
                onChange={(date: Date | null) =>
                  setDates((prevState) => ({ ...prevState, end: date }))
                }
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
