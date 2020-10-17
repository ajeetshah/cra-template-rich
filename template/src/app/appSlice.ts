import { createSlice } from '@reduxjs/toolkit'
import { IStoreState } from '../store/store'

export interface IApp {
  loading: boolean
}

export const slice = createSlice({
  name: 'app',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = Boolean(action.payload.data)
    },
  },
})

export const selectLoading = (state: IStoreState) => state.app.loading
export const { setLoading } = slice.actions
export default slice.reducer
