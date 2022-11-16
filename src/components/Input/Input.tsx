import { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean
  placeholder?: string
  name?: string
  type: string
  value?: string
  className: string
  onChange?: React.FormEventHandler<HTMLInputElement> | undefined
}

export const Input = ({
  required,
  placeholder,
  type,
  value,
  className,
  name,
  onChange,
}: Props) => {
  return (
    <input
      required={required}
      placeholder={placeholder}
      name={name}
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
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
