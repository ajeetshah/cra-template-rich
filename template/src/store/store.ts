import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiActionMiddleware from './apiActionMiddleware'

import appReducer, { IApp } from '../app/appSlice'
import homeReducer from '../pages/home/homeSlice'
import { IHome } from '../pages/home/iHome'

export interface IStore {
  app: IApp
  home: IHome
}

const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    apiActionMiddleware,
  ],
})

export default store
