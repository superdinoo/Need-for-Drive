import React from 'react'
import '../InputCity.scss'
import { RxCross2 } from 'react-icons/rx'

interface InputProps {
  value: string
  onChange: (value: string) => void
  name: string
  placeholder: string
  onReset: () => void
  labels: string
  list: string
}

const InputField: React.FC<InputProps> = ({
  value,
  onChange,
  name,
  placeholder,
  onReset,
  labels,
  list,
}) => {
  return (
    <div className="inputWrapper">
      <p>{labels}</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        className="inputCity"
        placeholder={placeholder}
        list={list}
      />
      {value.length > 0 && (
        <RxCross2 className="rxCrossIcon" onClick={onReset} />
      )}
    </div>
  )
}

export default InputField
