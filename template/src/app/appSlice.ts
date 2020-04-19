import { createSlice } from '@reduxjs/toolkit'
import { StoreState } from '../store/store'

export interface App {
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

export const selectLoading = (state: StoreState) => state.app.loading

export const { setLoading } = slice.actions

export default slice.reducer
