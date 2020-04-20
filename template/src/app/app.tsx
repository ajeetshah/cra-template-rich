import React, { Suspense } from 'react'
import Routes from '../routes/routes'
import ReLoader from '../common/reLoader'
import { selectLoading } from './appSlice'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function App() {
  const loading = useSelector(selectLoading)
  const toastDuration = process.env.REACT_APP_TOAST_DURATION || 5000

  return (
    <Suspense fallback={<ReLoader loading={true} />}>
      <ToastContainer autoClose={toastDuration} toastClassName="f-14" />
      <ReLoader loading={loading} />
      <Routes />
    </Suspense>
  )
}
