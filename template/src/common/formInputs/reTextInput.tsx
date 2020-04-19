import React, { LegacyRef } from 'react'
import ReRequiredMark from './reRequiredMark'

interface Props {
  autoComplete?: string
  autoFocus?: boolean
  className?: string
  defaultValue?: string
  formGroupClassName?: string
  id?: string
  label?: string
  labelClassName?: string
  name: string
  placeholder?: string
  refProp?: LegacyRef<any>
  type?: string
  children?: JSX.Element
  required?: boolean
}

export default function ReTextInput(props: Props) {
  const {
    autoComplete = 'off',
    autoFocus = false,
    className = '',
    defaultValue = '',
    formGroupClassName = '',
    id = 're-text-field',
    label = '',
    labelClassName = '',
    name,
    placeholder = '',
    refProp = null as any,
    type = 'text',
    children = null,
    required = false,
  } = props

  return (
    <div className={`form-group ${formGroupClassName}`}>
      {label && (
        <>
          <label className={labelClassName}>{label}</label>
          {required && <ReRequiredMark />}
        </>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        ref={refProp}
      />
      {children}
    </div>
  )
}
