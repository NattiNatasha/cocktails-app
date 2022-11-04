import { DOMAttributes } from 'react'
import PropTypes from 'prop-types'

export type ButtonType = 'button' | 'reset' | 'submit'

export interface Props extends DOMAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type: ButtonType
  onClick: (event: React.MouseEvent) => void
  buttonSize: string
  buttonColor: string
}

const SIZES = ['btn--medium', 'btn--large', 'btn--small']
const COLORS = ['btn--black', 'btn--white']

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonColor,
}: Props) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : COLORS[0]

  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonColor}`}
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
  buttonSize: PropTypes.string,
  buttonColor: PropTypes.string,
}

Button.defaultProps = {
  children: 'Default button',
  type: 'button',
  onClick: () => {},
  buttonSize: 'btn--medium',
  buttonColor: 'btn--black',
}
