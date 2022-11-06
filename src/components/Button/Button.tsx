import { DOMAttributes } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export type ButtonType = 'button' | 'reset' | 'submit'

export interface Props extends DOMAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: ButtonType
  onClick?: (event: React.MouseEvent) => void
  size?: string
  color?: string
}

const DEFAULT_SIZE = 'btn--medium'
const DEFAULT_COLOR = 'btn--black'

const SIZES = { medium: DEFAULT_SIZE, large: 'btn--large', small: 'btn--small' }
const COLORS = { black: DEFAULT_COLOR, white: 'btn--white' }

export const Button = ({ children, type, onClick, size, color }: Props) => {
  const sizeClass = SIZES[size as keyof typeof SIZES] && DEFAULT_SIZE
  const colorClass = COLORS[color as keyof typeof COLORS] && DEFAULT_COLOR

  return (
    <button
      className={`btn ${sizeClass} ${colorClass}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
}
