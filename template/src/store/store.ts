import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiActionMiddleware from './apiActionMiddleware'

import appReducer, { App } from '../app/appSlice'
import homeReducer, { Home } from '../pages/home/homeSlice'

export interface StoreState {
  app: App
  home: Home
}

const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
  },
  middleware: [...getDefaultMiddleware(), apiActionMiddleware],
})

export default store
