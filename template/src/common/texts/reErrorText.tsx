import React from 'react'

interface Props {
  text: string
  className?: string
  fontClass?: string
}

export default function ReErrorText(props: Props) {
  const { text, className = '', fontClass = 'f-14' } = props
  return <div className={`text-danger ${className} ${fontClass}`}>{text}</div>
}
