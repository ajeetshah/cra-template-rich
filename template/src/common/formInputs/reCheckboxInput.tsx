import { LegacyRef } from 'react'
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

export default function ReCheckboxInput(props: Props) {
  const { name, options = [], refProp = null as any, hintText = '' } = props
  return (
    <>
      {hintText && <p>{hintText}</p>}
      {options.map((item) => {
        return (
          <Form.Check
            defaultChecked={item.defaultChecked}
            key={item.id}
            type="checkbox"
            id={item.id}
            name={name}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            ref={refProp}
          />
        )
      })}
    </>
  )
}
