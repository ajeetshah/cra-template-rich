import React from 'react'
import { FormattedMessage } from 'react-intl'

interface Props {
  id: string
}

export default function FormattedMsg(props: Props) {
  return <FormattedMessage id={props.id} defaultMessage={'N/A'} />
}
