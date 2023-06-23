import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      name: 'Matheus A Barbosa',
      phone: 473265598,
      email: 'ht@gmail.com',
      id: 1
    },
    {
      name: 'Julio ALk',
      phone: 47326598,
      email: 'julio.ht@gmail.com',
      id: 2
    },
    {
      name: 'Inácio coelho',
      phone: 47326598,
      email: 'inaciosebastiao.ht@gmail.com',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
