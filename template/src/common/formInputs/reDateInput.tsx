import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

interface Props extends ReactDatePickerProps {}

export default function ReDateInput(props: Props) {
  return <DatePicker {...props} />
}
