import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  input: string
}

const initialState: FilterState = {
  input: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtering: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    }
  }
})

export const { filtering } = filterSlice.actions
export default filterSlice.reducer
