import { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean
  placeholder: string
  type: string
  value?: string
  className: string
  onChange?: React.FormEventHandler<HTMLInputElement>
}

export const Input = ({
  required,
  placeholder,
  type,
  value,
  className,
  onChange,
}: Props) => {
  return (
    <input
      required={required}
      placeholder={placeholder}
      type={type}
      value={value}
      className={className}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
