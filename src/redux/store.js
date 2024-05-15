import { configureStore } from "@reduxjs/toolkit"
import  {filtersReducer}  from '../redux/filtersSlice';
import sliceContacts from '../redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: sliceContacts,
    filters: filtersReducer,
  },
})