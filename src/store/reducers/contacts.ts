import { createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      name: 'Matheus Augusto Barbosa',
      phone: 47991268180,
      email: 'matts.barbosa@gmail.com',
      id: 1
    },
    {
      name: 'Augusta Klik',
      phone: 475666666333,
      email: 'augusta@gmail.com',
      id: 2
    },
    {
      name: 'Jamyr Ilk',
      phone: 479912648150,
      email: 'ilk.jay@gmail.com',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}
})

export default contactsSlice.reducer
