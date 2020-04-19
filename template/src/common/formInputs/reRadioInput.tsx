import React, { LegacyRef } from 'react'
import { Form } from 'react-bootstrap'

interface Option {
  id: string
  label: string
  value: string
  defaultChecked?: boolean
  disabled?: boolean
}

interface Props {
  name: string
  options: Option[]
  refProp?: LegacyRef<any>
  hintText?: string
}

export default function ReRadioInput(props: Props) {
  const { name, options = [], refProp = null as any, hintText = '' } = props
  return (
    <>
      {hintText && <p>{hintText}</p>}
      {options.map(option => {
        return (
          <Form.Check
            defaultChecked={option.defaultChecked}
            key={option.id}
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
            ref={refProp}
          />
        )
      })}
    </>
  )
}
