import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiActionMiddleware from './apiActionMiddleware'

import appReducer, { IApp } from '../app/appSlice'
import homeReducer, { IHome } from '../pages/home/homeSlice'

export interface IStoreState {
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
