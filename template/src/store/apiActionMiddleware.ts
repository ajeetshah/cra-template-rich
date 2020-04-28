import { setLoading } from '../app/appSlice'
import { Action } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  httpBadGateway,
  httpBadRequest,
  httpGatewayTimeout,
  httpNotFound,
  httpServerError,
  httpUnauthenticated,
} from '../constants/httpStatusCodes'
import history from '../routes/history'
import { AxiosResponse } from 'axios'

const TYPES = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
}

const apiActionMiddleware = (store) => (next) => (action: Action) => {
  const type = String(action.type)

  switch (type.substr(type.lastIndexOf('/') + 1)) {
    case TYPES.pending:
      next(setLoading({ data: true }))
      break
    case TYPES.rejected:
      next(setLoading({ data: false }))
      handleApiError(action, next)
      break
    case TYPES.fulfilled:
      next(setLoading({ data: false }))
      break
  }

  return next(action)
}

function handleApiError(action: any, next) {
  switch (action.code) {
    case httpBadRequest:
      break
    case httpUnauthenticated:
      doLogout(next)
      break
    case httpNotFound:
      break
    case httpServerError:
      break
    case httpBadGateway:
      break
    case httpGatewayTimeout:
      break
  }
  const payload: AxiosResponse = action && action.payload
  const message = payload && payload.data && payload.data.message
  message && toast.error(message)
}

function doLogout(next) {
  history.push('/')
}

export default apiActionMiddleware
