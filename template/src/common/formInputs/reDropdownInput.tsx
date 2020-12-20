import { LegacyRef } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  defaultValue?: string
  firstOption?: any
  keyForName: string
  keyForValue: string
  name: string
  options: any[]
  refProp?: LegacyRef<any>
}

export default function ReDropdownInput(props: Props) {
  const {
    defaultValue = '',
    firstOption = null,
    keyForName,
    keyForValue,
    name,
    options = [],
    refProp = null,
  } = props
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        name={name}
        as="select"
        ref={refProp as any}
        defaultValue={defaultValue}
      >
        {firstOption && (
          <option key={firstOption[keyForValue]} value={firstOption[keyForValue]}>
            {firstOption[keyForName]}
          </option>
        )}
        {options.map((option) => {
          return (
            <option key={option[keyForValue]} value={option[keyForValue]}>
              {option[keyForName]}
            </option>
          )
        })}
      </Form.Control>
    </Form.Group>
  )
}

// export default function ReDropdownSelect(props: Props) {
//   const { name, refProp = null, options = [], optionName, keyForValue, firstOption = null } = props
//   return (
//     <select name={name} ref={refProp}>
//       {firstOption && (
//         <option key={firstOption[keyForValue]} value={firstOption[keyForValue]}>
//           {firstOption[optionName]}
//         </option>
//       )}
//       {options.map(option => {
//         return (
//           <option key={option[keyForValue]} value={option[keyForValue]}>
//             {option[optionName]}
//           </option>
//         )
//       })}
//     </select>
//   )
// }
