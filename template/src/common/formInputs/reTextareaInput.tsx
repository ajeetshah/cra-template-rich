import { LegacyRef } from 'react'

interface Props {
  defaultValue?: string
  id?: string
  label?: string
  name: string
  placeholder?: string
  refProp?: LegacyRef<any>
  rows?: number
}

export default function ReTextareaInput(props: Props) {
  const {
    defaultValue = '',
    id = 're-textarea',
    label = '',
    name,
    placeholder = '',
    refProp = null,
    rows = 3,
  } = props

  return (
    <div className="form-group">
      {label && <label className="f-16">{label}</label>}
      <textarea
        id={id}
        name={name}
        ref={refProp}
        className="form-control"
        defaultValue={defaultValue}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}
