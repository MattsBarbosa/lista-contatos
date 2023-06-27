import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
