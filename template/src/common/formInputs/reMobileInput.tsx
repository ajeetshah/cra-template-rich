import React, { LegacyRef } from 'react'
import ReTextInput from './reTextInput'

interface Props {
  id?: string
  name: string
  defaultValue?: string | number
  refProp?: LegacyRef<any>
  placeholder?: string
}

export default function ReMobileInput(props: Props) {
  const { id = 're-number', name, defaultValue = '', refProp = null, placeholder = '' } = props
  return (
    <ReTextInput
      id={id}
      name={name}
      type="number"
      defaultValue={defaultValue as string}
      refProp={refProp}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}
