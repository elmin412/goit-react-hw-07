import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, filterSelect) => {
        console.log("selectvisible")
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterSelect.toLowerCase())
  )
})