import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  style?: React.CSSProperties
  type?: 'submit' | 'reset' | 'button'
}

export default function RePrimaryButton(props: Props) {
  const {
    children,
    className = '',
    disabled = false,
    onClick = () => {},
    style = {},
    type = 'button',
  } = props
  return (
    <button
      className={`btn btn-primary btn-block ${className}`}
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
