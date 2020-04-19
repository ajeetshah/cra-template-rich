import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export function handlePreRequest(config: AxiosRequestConfig) {
  // const tokens: Tokens = getAuthTokensFromLocal()
  // config.headers.Authorization = tokens.accessToken
  return config
}

export function handleRequestError(error: AxiosError) {
  return Promise.reject(error)
}

export function handleResponseSuccess(response: AxiosResponse) {
  return response
}

export function handleResponseError(error: AxiosError) {
  return Promise.reject(error)
}
