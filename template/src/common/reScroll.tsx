import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface Props {
  className?: string
  children?: JSX.Element
}

export default function ReScroll(props: Props) {
  const { className = '' } = props
  return <PerfectScrollbar className={className}>{props.children}</PerfectScrollbar>
}
