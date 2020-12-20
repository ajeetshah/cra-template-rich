import { LegacyRef } from 'react'
import ReTextInput from './reTextInput'

interface Props {
  id?: string
  name: string
  label?: string
  autoComplete?: string
  defaultValue?: string | number
  refProp?: LegacyRef<any>
  placeholder?: string
  children?: JSX.Element
}

export default function ReNumberInput(props: Props) {
  const {
    id = 're-number',
    name,
    label = '',
    autoComplete = 'off',
    defaultValue = '',
    refProp = null,
    placeholder = '',
    children = <></>,
  } = props
  return (
    <ReTextInput
      id={id}
      name={name}
      label={label}
      type="number"
      defaultValue={defaultValue as string}
      refProp={refProp}
      placeholder={placeholder}
      autoComplete={autoComplete}
    >
      {children}
    </ReTextInput>
  )
}
