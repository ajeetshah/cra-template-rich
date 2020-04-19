import React from 'react'
import { css } from '@emotion/core'
import BarLoader from 'react-spinners/BarLoader'
import { LoaderHeightWidthProps } from 'react-spinners/interfaces'
import { colorWhite, colorOrange } from '../constants/hexColors'

const override = css`
  display: block;
  margin: 0 auto;
  background-color: ${colorWhite};
  border-color: ${colorOrange};
`

interface Props extends LoaderHeightWidthProps {
  loading: boolean
}

export default function ReLoader(props: Props) {
  const defaultProps: Partial<Props> = {
    width: props.width || '100%',
    color: props.color || colorOrange,
    height: props.height || 2,
    css: props.css || override,
  }
  const finalProps = {
    ...props,
    ...defaultProps,
  }
  const { loading = false } = props
  return <>{loading && <BarLoader {...finalProps} />}</>
}
