import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { StoreState } from '../../store/store'
import { get } from '../../http/httpMethods'
import { urlCars } from '../../constants/apiURLs'
import { AxiosResponse } from 'axios'

const sliceName = 'home'

export interface Car {
  id: string
  title: string
}

export interface Home {
  cars: Car[]
  selectedCar: Car
}

export const fetchCars = createAsyncThunk(
  `${sliceName}/fetchCars`,
  async (query: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const url = query ? urlCars + '?title_like=' + query : urlCars
    try {
      return await get<Car[]>(url)
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
    cars: [] as Car[],
    selectedCar: {} as Car,
  },
  reducers: {
    setSelectedCar: (state: Home, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload
    },
  },
  extraReducers: {
    [fetchCars.pending.toString()]: (state, action) => {
      state.cars = []
    },
    [fetchCars.fulfilled.toString()]: (
      state,
      action: PayloadAction<AxiosResponse<Car[]>>
    ) => {
      state.cars = action.payload.data
    },
    [fetchCars.rejected.toString()]: (state, action) => {
      state.cars = []
    },
  },
})

export const homeState = (state: StoreState) => state.home

export const { setSelectedCar } = slice.actions

export default slice.reducer
