import { createSlice } from '@reduxjs/toolkit'
import { IStore } from '../store/store'

export interface IApp {
  loading: boolean
}

const name = 'app'

const initialState: IApp = {
  loading: false,
}

export const slice = createSlice({
  name,
  initialState,
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
export const selectApp = (state: IStore) => state.app

export default slice.reducer
