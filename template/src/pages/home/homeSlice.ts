import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IStoreState } from '../../store/store'
import { get } from '../../http/httpMethods'
import { urlCars } from '../../constants/apiURLs'
import { AxiosResponse } from 'axios'

const sliceName = 'home'

export interface ICar {
  id: string
  title: string
}

export interface IHome {
  cars: ICar[]
  selectedCar: ICar
}

export const fetchCars = createAsyncThunk(
  `${sliceName}/fetchCars`,
  async (query: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const url = query ? urlCars + '?title_like=' + query : urlCars
    try {
      return await get<ICar[]>(url)
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

export const slice = createSlice({
  name: sliceName,
  initialState: {
    cars: [] as ICar[],
    selectedCar: {} as ICar,
  },
  reducers: {
    setSelectedCar: (state: IHome, action: PayloadAction<ICar>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedCar = action.payload
    },
  },
  extraReducers: {
    [fetchCars.pending.toString()]: (state, action) => {
      state.cars = []
    },
    [fetchCars.fulfilled.toString()]: (
      state,
      action: PayloadAction<AxiosResponse<ICar[]>>
    ) => {
      state.cars = action.payload.data
    },
    [fetchCars.rejected.toString()]: (state, action) => {
      state.cars = []
    },
  },
})

export const { setSelectedCar } = slice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.home)`
export const homeState = (state: IStoreState) => state.home

export default slice.reducer
