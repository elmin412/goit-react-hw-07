import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectContacts, selectStatusFilter } from './selector';


const sliceContacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false, 
    error: false
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
  })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload 
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
  })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload)
        state.loading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      
})

export const selectFilteredContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, filterSelect) => {
        console.log("selectvisible")
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterSelect.toLowerCase())
  )
})

export default sliceContacts.reducer
