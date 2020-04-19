import React, { LegacyRef } from 'react'
import ReRequiredMark from './reRequiredMark'

interface Props {
  id?: string
  name: string
  label?: string
  labelClassName?: string
  defaultValue?: string | number
  formGroupClassName?: string
  refProp?: LegacyRef<any>
  placeholder?: string
  autoComplete?: string
  children?: JSX.Element
  required?: boolean
  additionalAction?: {
    label: string
    onClick: () => void
  }
}

export default function RePasswordInput(props: Props) {
  const {
    id = 're-password-input',
    name,
    label = '',
    labelClassName = '',
    defaultValue = '',
    formGroupClassName = '',
    refProp = null,
    placeholder = '',
    autoComplete = 'off',
    children = null,
    required = false,
    additionalAction = null,
  } = props
  return (
    <div className={`form-group ${formGroupClassName}`}>
      <label className="d-flex justify-content-between">
        {label && (
          <>
            <span className={labelClassName}>
              {label}
              {required && <ReRequiredMark />}
            </span>
          </>
        )}
        {additionalAction && (
          <span
            onClick={additionalAction.onClick}
            className="link cursor-pointer outline-none"
            tabIndex={-1}
          >
            {additionalAction.label}
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type="password"
        className="form-control"
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={refProp}
        autoComplete={autoComplete}
      />
      {children}
    </div>
  )
}
