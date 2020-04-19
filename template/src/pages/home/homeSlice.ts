import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { StoreState } from '../../store/store'
import { get } from '../../http/httpMethods'
import { urlCars } from '../../constants/apiURLs'

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
    const url = query ? urlCars + '?title_like=' + query : urlCars
    const response = await get<Car[]>(url)
    return response.data
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
    [fetchCars.fulfilled.toString()]: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload
    },
  },
})

export const homeState = (state: StoreState) => state.home

export const { setSelectedCar } = slice.actions

export default slice.reducer
