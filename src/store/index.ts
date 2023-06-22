import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
