import React, { Suspense } from 'react'
import Routes from '../routes/routes'
import ReLoader from '../common/reLoader'
import { selectLoading } from './appSlice'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function App() {
  const loading = useSelector(selectLoading)

  return (
    <Suspense fallback={<ReLoader loading={true} />}>
      <ToastContainer autoClose={5000} toastClassName="f-14" />
      <ReLoader loading={loading} />
      <Routes />
    </Suspense>
  )
}
