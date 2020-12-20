import { FormattedMessage } from 'react-intl'

interface IProps {
  id: string
}

export default function FormattedMsg(props: IProps) {
  return <FormattedMessage id={props.id} defaultMessage="N/A" />
}
