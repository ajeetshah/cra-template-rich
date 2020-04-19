import React from 'react'

interface Props {
  text: string
  className?: string
}

export default function ReHeading1(props: Props) {
  const { text, className = '' } = props
  const defaultClass = 'font-weight-light'
  return <h1 className={`${defaultClass} ${className}`}>{text}</h1>
}
