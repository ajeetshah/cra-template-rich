import { createSlice } from '@reduxjs/toolkit'
import { IStore } from '../store/store'

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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = Boolean(action.payload.data)
    },
  },
})

export const { setLoading } = slice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLoading = (state: IStore) => state.app.loading

export default slice.reducer
