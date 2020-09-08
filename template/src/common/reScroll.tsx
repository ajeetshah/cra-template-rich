import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface IProps {
  className?: string
  children?: JSX.Element
}

export default function ReScroll(props: IProps) {
  const { className = '' } = props
  return <PerfectScrollbar className={className}>{props.children}</PerfectScrollbar>
}
