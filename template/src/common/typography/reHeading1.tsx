import React from 'react'

interface IProps {
  text: string
  className?: string
}

export default function ReHeading1(props: IProps) {
  const { text, className = '' } = props
  const defaultClass = 'font-weight-light'
  return <h1 className={`${defaultClass} ${className}`}>{text}</h1>
}
